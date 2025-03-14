import { google } from 'googleapis'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()


export default async function handler(req,res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: `Method ${req.method} Not Allowed`})
    }
        const {name, email, message} = req.body
        if (!name || !email || !message) {
            return res.status(400).json({message: 'Missing required fields'})
        }
        try {
            // Setting up authentification
            const CLIENT_ID = dotenv.env.CLIENT_ID
            const CLIENT_SECRET = dotenv.env.CLIENT_SECRET
            const REDIRECT_URI = dotenv.env.REDIRECT_URI
            const REFRESH_TOKEN = dotenv.env.REFRESH_TOKEN

            const oauth2Client = new google.auth.OAuth2(
                CLIENT_ID,
                CLIENT_SECRET,
                REDIRECT_URI
            )
            oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
            const accessToken = await oauth2Client.getAccessToken()
            // Setting up the transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: dotenv.env.GMAIL_USER,
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken.token
                }
            })

            const mailOptions = {
                from: `${name} < ${email} >`,
                to: dotenv.env.GMAIL_USER,
                subject: `New message form portfolio of ${name}`,
                text: message
            }
            await transporter.sendEmail(mailOptions)
            res.status(200).json({message: 'Mensaje enviado correctamente'})
            } catch (error) {
            console.error('Error al enviar el mensaje:', error)
            res.status(500).json({message: 'Error al enviar el mensaje'})
            }
}