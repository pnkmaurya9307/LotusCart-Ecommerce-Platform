import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import subscribeRoutes from "./routes/subscribeRoutes.js"


let port = process.env.PORT || 6000

let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
<<<<<<< HEAD
 origin:[process.env.FRONTEND_URL , process.env.ADMIN_URL],
=======
 origin:["https://lotuscart-ecommerce-platform-frontend.onrender.com" , "https://lotuscart-ecommerce-platform-admin-il09.onrender.com"],
>>>>>>> 80cc84f0b3fb8f3e0776ba852b3ce3197445dfa0
 credentials:true
}))

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)
app.use("/api/subscribe", subscribeRoutes)




app.listen(port,()=>{
    console.log("Hello From Server")
    connectDb()
})


