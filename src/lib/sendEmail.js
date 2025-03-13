import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import dotenv from 'dotenv';

const CLIENT_ID = dotenv.env.CLIENT_ID;
const CLIENT_SECRET = dotenv.env.CLIENT_SECRET;
const REDIRECT_URI = dotenv.env.REDIRECT_URI;
const REFRESH_TOKEN = dotenv.env.REFRESH_TOKEN;

export async function sendEmail(to, subject, text) {
    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
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