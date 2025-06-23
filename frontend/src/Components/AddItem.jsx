import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRef } from "react";

function AddItem() {
  const ITEM_TYPES = ["Shirt", "Pant", "Shoes", "Sports Gear", "Other"];

  const [itemType, setItemType] = useState("");
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const coverRef = useRef();
  const additionalRef = useRef();

  const handleAddItem = async (e) => {
    e.preventDefault();

    if (!itemName || !description || !itemType) {
      toast("all fields required");
      return;
    }

    const formData = new FormData();

    formData.append("name", itemName);
    formData.append("description", description);
    formData.append("type", itemType);

    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    additionalImages.forEach((file) =>
      formData.append("additionalImages", file)
    );

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/item/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);

      if (res?.data?.success) {
        toast("Item added successfully");
        setItemName("");
        setItemType("");
        setDescription("");
        setCoverImage(null);
        setAdditionalImages([]);
        coverRef.current.value = null;
        additionalRef.current.value = null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 h-full">
      <h2 className="text-2xl font-semibold my-6 ml-4 md:ml-20">Add New Item</h2>
      <form
        onSubmit={handleAddItem}
        className="flex flex-col md:w-1/2 px-4 md:px-20 gap-4"
      >
        <input
          value={itemName}
          type="text"
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter Item name"
          className="p-2 outline-none border"
        />
        <input
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Item Description"
          className="p-2 outline-none border"
        />
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
          <input
            ref={coverRef}
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
          />
        </div>
        <div className="border flex flex-col gap-4 p-3">
          <label>Additional Images</label>
          <input
            ref={additionalRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setAdditionalImages([...e.target.files])}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-400 p-2 text-white text-lg font-medium hover:bg-blue-600 "
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;
