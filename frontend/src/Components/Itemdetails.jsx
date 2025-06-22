import React from "react";
import { IoMdClose } from "react-icons/io";
import ImageSlider from "./ImageSlider";

function Itemdetails({ selectedItem,onClose }) {
console.log("selected item",selectedItem);

  return (
    <div>
      <div className="flex items-center justify-between p-1 overflow-auto">
        <h1 className="text-xl font-semibold">Item Details</h1>
        <IoMdClose onClick={onClose} className="cursor-pointer hover:scale-125 transition-all duration-300" size={30} />
      </div>
      <hr />
      <h1 className="text-xl font-semibold">Cover Image :</h1>
      <img
        src={selectedItem?.coverImage}
        alt="coverImage"
        className="h-48 object-contain my-4 w-full"
      />
      <hr />
      <div className="flex flex-col gap-3 mt-4"> 
        <h2><span className="text-lg font-semibold">Item Name: </span> {selectedItem?.name}</h2>
        <p ><span  className="text-lg font-semibold">Item Description:</span> {selectedItem?.description}</p>
        <p><span className="text-lg font-semibold">Item Type:</span>  {selectedItem?.type}</p>
        <h2 className="text-xl font-semibold">Additional Images : </h2>
        <ImageSlider  images={selectedItem?.additionalImages} />
      </div>
    </div>
  );
}

export default Itemdetails;
