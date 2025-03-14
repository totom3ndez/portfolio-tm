import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Setting up authentication
        const CLIENT_ID = process.env.CLIENT_ID;
        const CLIENT_SECRET = process.env.CLIENT_SECRET;
        const REDIRECT_URI = process.env.REDIRECT_URI;
        const AUTHORIZATION_CODE = process.env.AUTHORIZATION_CODE;

        const oauth2Client = new google.auth.OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            REDIRECT_URI
        );

        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                code: AUTHORIZATION_CODE,         
                client_id: CLIENT_ID,             
                client_secret: CLIENT_SECRET,     
                redirect_uri: REDIRECT_URI,       
                grant_type: 'authorization_code'  
            }),
        });

        const data = await response.json(); 

        const REFRESH_TOKEN = data.refresh_token

        oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
        const accessToken = await oauth2Client.getAccessToken();

        // Setting up the transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_USER,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token
            }
        });

        const mailOptions = {
            from: `${name} <${email}>`,
            to: process.env.GMAIL_USER,
            subject: `New message from portfolio of ${name}`,
            text: message
        };

        await transporter.sendMail(mailOptions); // Corrected the method name
        res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        res.status(500).json({ message: 'Error al enviar el mensaje' });
    }
}
