import mongoose from "mongoose"

export const mongodbConnect=async()=>{
    try {
       await  mongoose.connect(`${process.env.MONGODB_URI}`).then(()=>{
            console.log(`mongodb is connected `);
            
        })
    } catch (error) {
        console.log(error);
        
    }   
}