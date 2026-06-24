import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY , 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    try {
        if(!filePath){
        return null
    }
    const uploadResult = await cloudinary.uploader.upload
    (filePath)
    fs.unlinkSync(filePath)
    return uploadResult.secure_url

    
        
    } catch (error) {
        fs.unlinkSync(filePath)
        console.log(error)
    }
    
}

export const deleteFromCloudinary = async (imageUrl) => {
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY , 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    try {
        if(!imageUrl){
            return null
        }
        const parts = imageUrl.split('/')
        const fileName = parts[parts.length - 1]
        const publicId = fileName.split('.')[0]

        const result = await cloudinary.uploader.destroy(publicId)
        return result
    } catch (error) {
        console.log(error)
    }
}
export default uploadOnCloudinary