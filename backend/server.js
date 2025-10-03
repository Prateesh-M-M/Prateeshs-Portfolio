const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: __dirname + '/.env' }); // ensure .env is loaded

const app = express();
const PORT = process.env.PORT || 5000;

// ---------- Debug .env ----------
console.log('📧 MAIL_USER:', process.env.MAIL_USER);
console.log('🔑 MAIL_PASS exists:', !!process.env.MAIL_PASS);

if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
  console.error('❌ ERROR: MAIL_USER or MAIL_PASS is missing in .env');
  process.exit(1); // stop server if credentials missing
}

// Middlewares
app.use(cors());
app.use(express.json());

// ---------- Contact Route ----------
app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // ---------- Verify SMTP ----------
  try {
    await transporter.verify();
    console.log('✅ SMTP connection successful');
  } catch (err) {
    console.error('❌ SMTP verification failed:', err);
    return res.status(500).json({ success: false, message: 'SMTP connection failed. Check credentials.' });
  }

  // Prepare email
  const mailOptions = {
    from: process.env.MAIL_USER, // always your Gmail
    replyTo: email,              // visitor's email
    to: process.env.MAIL_USER,   // you receive email
    subject: subject,
    html: `
      <h3>Contact Form Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent from ${email}`);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Email sending error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email. Check server logs.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});