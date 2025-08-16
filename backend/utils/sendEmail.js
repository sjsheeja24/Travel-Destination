const nodemailer = require('nodemailer');

const sendEmail = async ({ name, email, message }) => {

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent to Gmail'); // ✅ Success message
  } catch (err) {
    console.error('❌ Email error:', err); // ❌ Error message
  }
};

module.exports = sendEmail;
