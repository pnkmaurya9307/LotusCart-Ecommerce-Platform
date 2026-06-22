import validator from "validator"
import transporter from "../config/mailer.js"

export const subscribe = async (req,res) => {
    try {
        let {email} = req.body

        if(!email || !validator.isEmail(email)){
            return res.status(400).json({message:"Enter a valid email"})
        }

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Newsletter Subscription - LotusCart",
            text: `New subscriber email: ${email}`,
            html: `<p>A person has requestion for subscription with the following Email :</p><p><b>${email}</b></p>`
        })

        return res.status(200).json({message:"Subscribed successfully"})

    } catch (error) {
        console.log("subscribe error",error)
        return res.status(500).json({message:`Subscribe error ${error}`})
    }
}