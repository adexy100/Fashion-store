import { check } from "express-validator";

export const validSign = [
  check("firstName", "First name is required")
    .notEmpty()
    .isLength({
      min: 3,
      max: 32,
    })
    .withMessage("first name must be between 3 to 32 characters"),

  check("lastName", "Last name is required")
    .notEmpty()
    .isLength({
      min: 3,
      max: 32,
    })
    .withMessage("last name must be between 3 to 32 characters"),

  check("email").isEmail().withMessage("Must be a valid email address"),

  check("password", "password is required")
    .notEmpty()
    .isLength({
      min: 6,
    })
    .withMessage("Password must contain at least 6 characters"),

  check("phoneNumber").optional({ nullable: true }),
];

export const validLogin = [
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password", "password is required").notEmpty(),
  check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password must contain at least 6 characters"),
];

// exports.forgotPasswordValidator = [
//     check('email')
//         .not()
//         .isEmpty()
//         .isEmail()
//         .withMessage('Must be a valid email address')
// ];

// exports.resetPasswordValidator = [
//     check('newPassword')
//         .not()
//         .isEmpty()
//         .isLength({ min: 6 })
//         .withMessage('Password must be at least  6 characters long')
// ];
