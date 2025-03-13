import express, { json } from 'express';
import { createTransport } from 'nodemailer';
import { google } from 'googleapis';
import { config, env } from 'dotenv';
import cors from 'cors';

config();

const app = express();
app.use(json());
app.use(cors());

const CLIENT_ID = env.CLIENT_ID;
const CLIENT_SECRET = env.CLIENT_SECRET;
const REDIRECT_URI = env.REDIRECT_URI;
const REFRESH_TOKEN = env.REFRESH_TOKEN;


async function sendEmail(to, subject, text) {
    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'stomas.mdz@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: 'stomas.mdz@gmail.com',
            to,
            subject,
            text,
        };

        const result = await transporter.sendMail(mailOptions);
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

app.post('./api/contact.js', async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        await sendEmail(email, subject, message);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

const PORT = env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});