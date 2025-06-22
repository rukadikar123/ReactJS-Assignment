import { uploadOnCloudinary } from "../config/Cloudinary.js";
import Item from "../Model/Item.schema.js";

export const addItem=async(req,res)=>{
    try {
        const {name,description, type}=req.body;

    if([name,description,type].some((item)=>item ==='')){
        return res.status(400).json({
            success:false,
            message:"All field required"
        })
    }        
    let coverImageFiles=req?.files?.coverImage?.[0]

    let coverImage;
    if(coverImageFiles){
        coverImage=await uploadOnCloudinary(coverImageFiles.path)
    }     

    const additionalImages = [];
    const additionalImageFiles = req?.files?.additionalImages || [];

    for (const file of additionalImageFiles) {
      const url = await uploadOnCloudinary(file.path);
      if (url) additionalImages.push(url);
    }

    const newItem=await Item.create({
        name,
        description,
        type,
        coverImage,
        additionalImages
    })

    return res.status(201).json({
        success:true,
        message:"Item added successfully",
        item:newItem
    })

    } catch (error) {

         const allFiles = [
      ...(req.files?.coverImage || []),
      ...(req.files?.additionalImages || []),
    ];
    allFiles.forEach((file) => {
      if (file?.path && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    });

         return res.status(500).json({
      success: false,
      message: `sendItem error: ${error.message}`,
    });
    }
}

export const getAllItems=async(req,res)=>{
    try {
        const items=await Item.find()

        if(!items.length===0){
            return res.status(400).json({
                success:false,
                message:"No Items found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"All items retrieved",
            items
        })

    } catch (error) {
      return res.status(500).json({
      success: false,
      message: `getAllItems error: ${error.message}`,
    });   
    }
}