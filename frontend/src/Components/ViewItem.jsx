import axios from "axios";
import { useEffect, useState } from "react"


function ViewItem() {
  const [items,setItems]=useState([])

  const fetchItems=async()=>{
    try {
      const res=await axios.get(`${import.meta.env.VITE_API_URL}/api/item/all`)
      setItems(res?.data?.items)
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    fetchItems()

  },[])

  return (
   <>
   
    {
      items ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8">
      <div className="border p-2 text-center hover:cursor-pointer shadow-md hover:scale-105 transition-all ease-in-out duration-300">
        <div className="flex">
          <img className='w-full h-48 object-contain' src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <hr />
        <h2 className='text-center  mt-2 font-medium'>item name</h2>
      </div>
    </div> : (
      <div>No items found</div>
    )
    }
   </>
  )
}

export default ViewItem