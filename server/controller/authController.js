import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import sendMail from "./sendMail.js";

import User from "../model/authModel.js";
// const expressJwt = require('express-jwt');
// const _ = require('lodash');
// const { OAuth2Client } = require('google-auth-library');
// const fetch = require('node-fetch');

// const expressJWT = require('express-jwt');
import { errorHandler } from "../helpers/dbErrorHandling.js";

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_ACCOUNT_ACTIVATION, {
    expiresIn: "5m",
  });
};

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};

export const registerController = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const firstError = errors.array().map((error) => error.msg)[0];
      return res.status(422).json({
        errors: firstError,
      });
    } else {
      const user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ errors: "This email already exists." });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = {
      firstName,
      lastName,
      email,
      password: passwordHash,
      phoneNumber,
    };

    const token = createActivationToken(newUser);
    const url = `${process.env.CLIENT_URL}/register/complete/${token}`;
    console.log(password, newUser);
    sendMail(email, url, "Verify your email address");
    res.json({ message: `Email has been sent to ${email}` });
  } catch (err) {
    return res.status(400).json({
      success: false,
      errors: err.message,
    });
  }
};

export const activationController = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, (err, decoded) => {
      if (err) {
        console.log("Activation error");
        return res.status(401).json({
          errors: "Expired link. Signup again",
        });
      } else {
        const {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
        } = jwt.decode(token);

        console.log(email, password);
        const user = new User({
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
        });

        user.save((err, user) => {
          if (err) {
            console.log("Save error", errorHandler(err));
            return res.status(401).json({
              errors: errorHandler(err),
            });
          } else {
            console.log(user);
            return res.status(201).json({
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              message: "Signup success",
            });
          }
        });
      }
    });
  } else {
    return res.json({
      message: "error happening please try again",
    });
  }
};

export const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ errors: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ errors: "Invalid email or password" });

    const token = createRefreshToken({ id: user._id });

    return res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    });
  } catch (err) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const firstError = errors.array().map((error) => error.msg)[0];
      return res.status(422).json({
        errors: firstError,
      });
    }
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

// exports.forgotPasswordController = (req, res) => {
//   const { email } = req.body;
//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     const firstError = errors.array().map(error => error.msg)[0];
//     return res.status(422).json({
//       errors: firstError
//     });
//   } else {
//     User.findOne(
//       {
//         email
//       },
//       (err, user) => {
//         if (err || !user) {
//           return res.status(400).json({
//             error: 'User with that email does not exist'
//           });
//         }

//         const token = jwt.sign(
//           {
//             _id: user._id
//           },
//           process.env.JWT_RESET_PASSWORD,
//           {
//             expiresIn: '10m'
//           }
//         );

//         const emailData = {
//           from: process.env.EMAIL_FROM,
//           to: email,
//           subject: `Password Reset link`,
//           html: `
//                     <h1>Please use the following link to reset your password</h1>
//                     <p>${process.env.CLIENT_URL}/users/password/reset/${token}</p>
//                     <hr />
//                     <p>This email may contain sensetive information</p>
//                     <p>${process.env.CLIENT_URL}</p>
//                 `
//         };

//         return user.updateOne(
//           {
//             resetPasswordLink: token
//           },
//           (err, success) => {
//             if (err) {
//               console.log('RESET PASSWORD LINK ERROR', err);
//               return res.status(400).json({
//                 error:
//                   'Database connection error on user password forgot request'
//               });
//             } else {
//               sgMail
//                 .send(emailData)
//                 .then(sent => {
//                   // console.log('SIGNUP EMAIL SENT', sent)
//                   return res.json({
//                     message: `Email has been sent to ${email}. Follow the instruction to activate your account`
//                   });
//                 })
//                 .catch(err => {
//                   // console.log('SIGNUP EMAIL SENT ERROR', err)
//                   return res.json({
//                     message: err.message
//                   });
//                 });
//             }
//           }
//         );
//       }
//     );
//   }
// };

// exports.resetPasswordController = (req, res) => {
//   const { resetPasswordLink, newPassword } = req.body;

//   const errors = validationResult(req);

//   if (!errors.isEmpty()) {
//     const firstError = errors.array().map(error => error.msg)[0];
//     return res.status(422).json({
//       errors: firstError
//     });
//   } else {
//     if (resetPasswordLink) {
//       jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, function(
//         err,
//         decoded
//       ) {
//         if (err) {
//           return res.status(400).json({
//             error: 'Expired link. Try again'
//           });
//         }

//         User.findOne(
//           {
//             resetPasswordLink
//           },
//           (err, user) => {
//             if (err || !user) {
//               return res.status(400).json({
//                 error: 'Something went wrong. Try later'
//               });
//             }

//             const updatedFields = {
//               password: newPassword,
//               resetPasswordLink: ''
//             };

//             user = _.extend(user, updatedFields);

//             user.save((err, result) => {
//               if (err) {
//                 return res.status(400).json({
//                   error: 'Error resetting user password'
//                 });
//               }
//               res.json({
//                 message: `Great! Now you can login with your new password`
//               });
//             });
//           }
//         );
//       });
//     }
//   }
// };

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
// // Google Login
// exports.googleController = (req, res) => {
//   const { idToken } = req.body;

//   client
//     .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
//     .then(response => {
//       // console.log('GOOGLE LOGIN RESPONSE',response)
//       const { email_verified, name, email } = response.payload;
//       if (email_verified) {
//         User.findOne({ email }).exec((err, user) => {
//           if (user) {
//             const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//               expiresIn: '7d'
//             });
//             const { _id, email, name, role } = user;
//             return res.json({
//               token,
//               user: { _id, email, name, role }
//             });
//           } else {
//             let password = email + process.env.JWT_SECRET;
//             user = new User({ name, email, password });
//             user.save((err, data) => {
//               if (err) {
//                 console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
//                 return res.status(400).json({
//                   error: 'User signup failed with google'
//                 });
//               }
//               const token = jwt.sign(
//                 { _id: data._id },
//                 process.env.JWT_SECRET,
//                 { expiresIn: '7d' }
//               );
//               const { _id, email, name, role } = data;
//               return res.json({
//                 token,
//                 user: { _id, email, name, role }
//               });
//             });
//           }
//         });
//       } else {
//         return res.status(400).json({
//           error: 'Google login failed. Try again'
//         });
//       }
//     });
// };

// exports.facebookController = (req, res) => {
//   console.log('FACEBOOK LOGIN REQ BODY', req.body);
//   const { userID, accessToken } = req.body;

//   const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

//   return (
//     fetch(url, {
//       method: 'GET'
//     })
//       .then(response => response.json())
//       // .then(response => console.log(response))
//       .then(response => {
//         const { email, name } = response;
//         User.findOne({ email }).exec((err, user) => {
//           if (user) {
//             const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
//               expiresIn: '7d'
//             });
//             const { _id, email, name, role } = user;
//             return res.json({
//               token,
//               user: { _id, email, name, role }
//             });
//           } else {
//             let password = email + process.env.JWT_SECRET;
//             user = new User({ name, email, password });
//             user.save((err, data) => {
//               if (err) {
//                 console.log('ERROR FACEBOOK LOGIN ON USER SAVE', err);
//                 return res.status(400).json({
//                   error: 'User signup failed with facebook'
//                 });
//               }
//               const token = jwt.sign(
//                 { _id: data._id },
//                 process.env.JWT_SECRET,
//                 { expiresIn: '7d' }
//               );
//               const { _id, email, name, role } = data;
//               return res.json({
//                 token,
//                 user: { _id, email, name, role }
//               });
//             });
//           }
//         });
//       })
//       .catch(error => {
//         res.json({
//           error: 'Facebook login failed. Try later'
//         });
//       })
//   );
// };
