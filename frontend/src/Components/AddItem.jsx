import  { useState } from "react";
import axios from 'axios'


function AddItem() {
  const ITEM_TYPES = ["Shirt", "Pant", "Shoes", "Sports Gear", "Other"];

  const [itemType, setItemType] = useState("");
  const [itemName,setItemName]=useState("")
  const [description,setDescription]=useState("")
  const [coverImage,setCoverImage]=useState(null)
  const [additionalImages,setAdditionalImages]=useState([])
  const [message,setmessage]=useState("")

const handleAddItem=async(e)=>{
  e.preventDefault()

  if(!itemName || !description || !itemType){
        setmessage("all fields required")
        return;
      }

      const formData= new FormData()

      formData.append("name",itemName)
      formData.append("description",description)
      formData.append("type",itemType)
      
      if(coverImage){
        formData.append("coverImage",coverImage)
      }

      additionalImages.forEach((file)=> FormData.append("additionImage",file))

    try {
      const res=await axios.post(`${import.meta.env.VITE_API_URL}/api/item/add`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      })

      if(res.status.success){
        setmessage("item added successfully")
        setItemName("")
        setItemType("")
        setDescription("")
        setCoverImage(null)
        setAdditionalImages([])
      }else{
        setmessage("Something went wrong")
      }

    } catch (error) {
      console.log(error);
      setmessage("server error")
      
    }
}

  return (
    <div className="mt-10 h-full">
      <h2 className="text-2xl font-semibold my-6 ml-20">Add New Item</h2>
      <form onSubmit={handleAddItem} className="flex flex-col w-1/2 px-20 gap-4">
        <input type="text" placeholder="Enter Item name"  className="p-2 outline-none border"/>
        <input type="text" placeholder="Enter Item Description" className="p-2 outline-none border" />
        <select
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
          required
          className="border rounded-md p-2 w-full"
        >
          <option value="">select type</option>
          {ITEM_TYPES.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        <div className="border flex flex-col gap-4 p-3">
          <label>CoverImage</label>
          <input type="file" accept="image/*" onChange={(e)=>setCoverImage(e.target.files[0])} />
        </div>
         <div className="border flex flex-col gap-4 p-3">
          <label>Additional Images</label>
          <input type="file" accept="image/*" multiple onChange={(e)=>setAdditionalImages([...e.target.files])} />
        </div>
        <button type="submit" className="bg-blue-400 p-2 text-white text-lg font-medium hover:bg-blue-600 " >Add Item</button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}

export default AddItem;
