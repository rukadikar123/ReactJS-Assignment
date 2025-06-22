import axios from "axios";
import { useEffect, useState } from "react";

function ViewItem({openModal}) {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/item/all`
      );
      setItems(res?.data?.items);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);   



  return (
    <>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8">
          {items?.map((item) => (
            <div  onClick={()=>openModal(item)} key={item?._id} className="border p-2 text-center hover:cursor-pointer shadow-md hover:scale-105 transition-all ease-in-out duration-300">
              <div className="flex">
                <img
                  className="w-full h-48 object-contain"
                  src={item?.coverImage}
                  alt=""
                />
              </div>
              <hr />
              <h2 className="text-center truncate  mt-2 font-medium">{item?.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div>No items found</div>
      )}
    </>
  );
}

export default ViewItem;
