import React from "react";
import { IoMdClose } from "react-icons/io";
import ImageSlider from "./ImageSlider";

function Itemdetails({ selectedItem, onClose }) {
  console.log("selected item", selectedItem);

  return (
    <div>
      <div className="flex items-center justify-between p-1 overflow-auto">
        <h1 className="text-2xl font-bold">Item Details</h1>
        <IoMdClose
          onClick={onClose}
          className="cursor-pointer hover:scale-125 transition-all duration-300"
          size={30}
        />
      </div>
      <hr />
      <h1 className="text-lg mt-2 font-semibold">Cover Image :</h1>
      <img
        src={selectedItem?.coverImage}
        alt="coverImage"
        className="h-48 object-contain my-4 w-full"
      />
      <hr />
      <div className="flex flex-col gap-3 mt-4">
        <h2 className="break-words">
          <span className="text-lg font-semibold">Item Name: </span>
          <span className="whitespace-normal">{selectedItem?.name}</span>
        </h2>
        <hr />
        <p className="break-words">
          <span className="text-lg font-semibold">Item Description: </span>
          <span className="whitespace-normal">{selectedItem?.description}</span>
        </p>
        <hr />
        <p>
          <span className="text-lg font-semibold">Item Type:</span>{" "}
          {selectedItem?.type}
        </p>
        <hr />
        <h2 className="text-lg font-semibold">Additional Images : </h2>
        <ImageSlider images={selectedItem?.additionalImages} />
      </div>
    </div>
  );
}

export default Itemdetails;
