import Order from "../model/orderModel.js";
import User from "../model/userModel.js";
import razorpay from 'razorpay'
import dotenv from 'dotenv'
import transporter from "../config/mailer.js";
dotenv.config()
const currency = 'inr'
const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

const sendOrderConfirmationEmail = async (orderData) => {
    const itemRows = orderData.items
        .map(i => `
            <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eee;color:#333;font-size:14px;">
                    ${i.name} <span style="color:#888;">(Size: ${i.size})</span> &times; ${i.quantity}
                </td>
                <td style="padding:12px 0;border-bottom:1px solid #eee;color:#333;font-size:14px;text-align:right;">
                    ₹${i.price * i.quantity}
                </td>
            </tr>
        `)
        .join('');

    await transporter.sendMail({
        from: `"LotusCart" <${process.env.EMAIL_FROM}>`,
        to: process.env.OWNER_EMAIL,
        subject: `New Order from ${orderData.address.firstName} ${orderData.address.lastName}`,
        html: `
        <div style="background-color:#f4f4f7;padding:40px 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
          <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

            <div style="background:linear-gradient(135deg,#7c3aed,#a855f7);padding:28px 32px;text-align:center;">
              <h1 style="margin:0;color:#fff;font-size:22px;letter-spacing:0.5px;">🛍️ LotusCart — New Order Received</h1>
            </div>

            <div style="padding:32px;">
              <h2 style="margin:0 0 8px;color:#111;font-size:20px;">Order Details</h2>
              <p style="margin:0 0 24px;color:#666;font-size:14px;">
                A new order has been placed on LotusCart.
              </p>

              <div style="margin-bottom:24px;padding:16px;background:#f9f7ff;border-radius:8px;">
                <p style="margin:0 0 4px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Customer Details</p>
                <p style="margin:4px 0;color:#333;font-size:14px;"><strong>Name:</strong> ${orderData.address.firstName} ${orderData.address.lastName}</p>
                <p style="margin:4px 0;color:#333;font-size:14px;"><strong>Email:</strong> ${orderData.address.email}</p>
                <p style="margin:4px 0;color:#333;font-size:14px;"><strong>Phone:</strong> ${orderData.address.phone}</p>
              </div>

              <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
                <tr>
                  <td style="padding:6px 0;color:#666;font-size:14px;">Payment Method</td>
                  <td style="padding:6px 0;color:#111;font-size:14px;font-weight:600;text-align:right;">${orderData.paymentMethod}</td>
                </tr>
              </table>

              <h3 style="margin:24px 0 8px;color:#111;font-size:15px;border-top:1px solid #eee;padding-top:20px;">Items Ordered</h3>
              <table style="width:100%;border-collapse:collapse;">
                ${itemRows}
              </table>

              <table style="width:100%;border-collapse:collapse;margin-top:16px;">
                <tr>
                  <td style="padding:12px 0;color:#111;font-size:16px;font-weight:700;">Total</td>
                  <td style="padding:12px 0;color:#7c3aed;font-size:18px;font-weight:700;text-align:right;">₹${orderData.amount}</td>
                </tr>
              </table>

              <div style="margin-top:24px;padding:16px;background:#f9f7ff;border-radius:8px;">
                <p style="margin:0 0 4px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Delivering to</p>
                <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
                  ${orderData.address.street}, ${orderData.address.city}, ${orderData.address.state} - ${orderData.address.pinCode}
                </p>
              </div>
            </div>

            <div style="background:#fafafa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
              <p style="margin:8px 0 0;color:#bbb;font-size:11px;">© ${new Date().getFullYear()} LotusCart. All rights reserved.</p>
            </div>

          </div>
        </div>
        `
    });
};

// for User
export const placeOrder = async (req,res) => {
     try {
         const {items , amount , address} = req.body;
         const userId = req.userId;
         const orderData = {
            items,
            amount,
            userId,
            address,
            paymentMethod:'COD',
            payment:false,
            date: Date.now()
         }
         const newOrder = new Order(orderData)
         await newOrder.save()
         try {
             await sendOrderConfirmationEmail(orderData)
         } catch (emailError) {
             console.log('Email failed:', emailError)
         }
         await User.findByIdAndUpdate(userId,{cartData:{}})
         return res.status(201).json({message:'Order Place'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Order Place error'})
    }
}


export const placeOrderRazorpay = async (req,res) => {
    try {
         const {items , amount , address} = req.body;
         const userId = req.userId;
         const orderData = {
            items,
            amount,
            userId,
            address,
            paymentMethod:'Razorpay',
            payment:false,
            date: Date.now()
         }
         const newOrder = new Order(orderData)
         await newOrder.save()
         const options = {
            amount:amount * 100,
            currency: currency.toUpperCase(),
            receipt : newOrder._id.toString()
         }
         await razorpayInstance.orders.create(options, (error,order)=>{
            if(error) {
                console.log(error)
                return res.status(500).json(error)
            }
            res.status(200).json(order)
         })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}


export const verifyRazorpay = async (req,res) =>{
    try {
        const userId = req.userId
        const {razorpay_order_id} = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if(orderInfo.status === 'paid'){
            await Order.findByIdAndUpdate(orderInfo.receipt,{payment:true});
            const order = await Order.findById(orderInfo.receipt)
            try {
                await sendOrderConfirmationEmail(order)
            } catch (emailError) {
                console.log('Email failed:', emailError)
            }
            await User.findByIdAndUpdate(userId , {cartData:{}})
            res.status(200).json({message:'Payment Successful'})
        } else {
            res.status(400).json({message:'Payment Failed'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}


export const userOrders = async (req,res) => {
    try {
        const userId = req.userId;
        const orders = await Order.find({userId})
        return res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"userOrders error"})
    }
}


// for Admin

export const allOrders = async (req,res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"adminAllOrders error"})
    }
}

export const updateStatus = async (req,res) => {
    try {
        const {orderId , status} = req.body
        await Order.findByIdAndUpdate(orderId , { status })
        return res.status(201).json({message:'Status Updated'})
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}