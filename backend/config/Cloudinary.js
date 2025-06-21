import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

export const uploadOnCloudinary = async (filePath) => {

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  if (!filePath) {
    return null;
  }

  try {
    const result = await cloudinary.uploader.upload(filePath);
    fs.unlinkSync(filePath);
    return result?.secure_url;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(filePath);
  }
};
//   {
//     name: "Sony WH-1000XM5",
//     description: "Industry-leading noise cancellation headphones with crystal clear audio and long battery life.",
//     type: "Other"
//   },