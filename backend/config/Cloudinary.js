import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'
 
    
    export const uploadOnCloudinary=async(filePath)=>{
        cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET 
    });
        try {
            if(!filePath){
                return null
            }
            
            const result=await cloudinary.uploader.upload(filePath)
            fs.unlinkSync(filePath)
            return result?.secure_url

        } catch (error) {
            console.log(error);
            fs.unlinkSync(filePath)
        }
    }