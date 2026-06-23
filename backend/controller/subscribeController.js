import validator from "validator"
import transporter from "../config/mailer.js"

export const subscribe = async (req,res) => {
    try {
        let {email} = req.body

        if(!email || !validator.isEmail(email)){
            return res.status(400).json({message:"Enter a valid email"})
        }

await transporter.sendMail({
    from: `"LotusCart" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_USER,
    subject: "📩 New Subscription Request - LotusCart",
    text: `New subscription request from: ${email}`,
    html: `
    <div style="background-color:#f4f4f7;padding:40px 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
      <div style="max-width:480px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

        <div style="background:linear-gradient(135deg,#7c3aed,#a855f7);padding:24px 32px;text-align:center;">
          <h1 style="margin:0;color:#fff;font-size:18px;letter-spacing:0.5px;">🛍️ LotusCart</h1>
        </div>

        <div style="padding:32px;">
          <p style="margin:0 0 4px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Admin Notification</p>
          <h2 style="margin:0 0 16px;color:#111;font-size:18px;">📩 New Subscription Request</h2>
          <p style="margin:0 0 20px;color:#666;font-size:14px;line-height:1.5;">
            A visitor has requested to subscribe to LotusCart with following Email: 
          </p>

          <div style="padding:16px;background:#f9f7ff;border-radius:8px;margin-bottom:20px;">
            <p style="margin:0 0 4px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Email</p>
            <p style="margin:0;color:#7c3aed;font-size:16px;font-weight:700;">${email}</p>
          </div>

          <div style="padding:14px 16px;background:#fff8e6;border-left:3px solid #f5a623;border-radius:6px;">
            <p style="margin:0;color:#8a6d1f;font-size:13px;line-height:1.5;">
              ⏳ <strong>Action needed:</strong> Confirm the subscription.
            </p>
          </div>
        </div>

        <div style="background:#fafafa;padding:16px 32px;text-align:center;border-top:1px solid #eee;">
          <p style="margin:0;color:#bbb;font-size:11px;">© ${new Date().getFullYear()} LotusCart. All rights reserved.</p>
        </div>

      </div>
    </div>
    `
})

        return res.status(200).json({message:"Subscribed successfully"})

    } catch (error) {
        console.log("subscribe error",error)
        return res.status(500).json({message:`Subscribe error ${error}`})
    }
}