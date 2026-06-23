// NEW — paste this in instead
import { Resend } from "resend"
import dotenv from "dotenv"
dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY)

const transporter = {
    sendMail: async ({ from, to, subject, text, html }) => {
        const { data, error } = await resend.emails.send({ from, to, subject, text, html })
        if (error) throw error
        return data
    }
}

export default transporter