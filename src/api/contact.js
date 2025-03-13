import sendEmail from '../../lib/sendEmail'; // Ajusta la ruta si es necesario

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, subject, message } = req.body;

        try {
            await sendEmail(email, subject, message);
            res.status(200).json({ message: 'Email sent successfully!' });
            console.log('Mensaje enviado')
        } catch (error) {
            res.status(500).json({ error: `Failed to send email. ${error}` });
            console.log('Mensaje no enviado')
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}