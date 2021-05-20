import nodemailer from "nodemailer";

// send mail
const sendEmail = (to, url, txt) => {
  const Transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.SENDER_EMAIL_ADDRESS,
      pass: process.env.SENDER_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SENDER_EMAIL_ADDRESS,
    to: to,
    subject: "RAYCHYBEAUTY WORLD",
    html: `
                <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the RayChyBeauty World.</h2>
                <p>Congratulations! You're almost set to have access to all.
                    Just click the button below to validate your email address.
                </p>
                
                <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
            
                <p>If the button doesn't work for any reason, you can also click on the link below:</p>
            
                <div>${url}</div>
                </div>
            `,
  };

  Transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(400).send({
        message:
          "Technical Issue!, Please click on resend for verify your Email.",
      });
    }
    return info;
  });
};

export default sendEmail;
