import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try {
        let {token} = req.cookies

        if(!token) {
            return res.status(401).json({message:"Not Authorized. Please Login Again."})
        }

        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if(!verifyToken){
            return res.status(401).json({message:"Invalid Token. Please Login Again."})
        }

        // ✅ FIX — look INSIDE the token and check if it actually belongs to admin
        // Admin token contains {email}, user token contains {userId}
        // So if email is missing, or doesn't match admin email — reject it
        if(!verifyToken.email || verifyToken.email !== process.env.ADMIN_EMAIL){
            return res.status(403).json({message:"Access Denied. Admins Only."})
        }

        req.adminEmail = verifyToken.email  // ✅ use email from token, not from env directly
        next()

    } catch (error) {
        console.log("adminAuth error")
        return res.status(500).json({message:`adminAuth error ${error}`})
    }
}

export default adminAuth