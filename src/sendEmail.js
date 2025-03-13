import { google } from 'googleapis';
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


// Load OAuth2 client credentials
const CLIENT_ID = dotenv.env.MAIL_CLIENT_ID
const CLIENT_SECRET = dotenv.env.MAIL_SECRET_KEY
const REDIRECT_URI = 'Your_Redirect_URI';
const REFRESH_TOKEN = 'Your_Refresh_Token';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendEmail() {
    try {
        const accessToken = await oauth2Client.getAccessToken();

        const transport = createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'your-email@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token,
            },
        });

        const mailOptions = {
            from: 'SENDER NAME <your-email@gmail.com>',
            to: 'recipient@example.com',
            subject: 'Test Email from Gmail API',
            text: 'Hello from Gmail API!',
            html: '<h1>Hello from Gmail API!</h1>',
        };

        const result = await transport.sendMail(mailOptions);
        console.log('Email sent successfully:', result);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

sendEmail();