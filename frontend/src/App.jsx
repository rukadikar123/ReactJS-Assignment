import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddItem from "./Components/AddItem";
import ViewItem from "./Components/ViewItem";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";
import Itemdetails from "./Components/Itemdetails";
import { useState } from "react";
import { Suspense } from "react";

Modal.setAppElement('#root');

function App() {
  const [isModalOpen,setIsModalOpen]=useState(false)
  const [selectedItem,setselectedItem]=useState(null)

  const navigate=useNavigate()

const closeModal=()=>{
  setIsModalOpen(false)
  setselectedItem(null)

  navigate('/view')
}

const openModal=(Item)=>{
  setIsModalOpen(true)
  setselectedItem(Item)
}

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddItem />} />
        <Route path="/view" element={<ViewItem openModal={openModal}/>} />
        
      </Routes>
      <ToastContainer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="bg-white md:h-[95vh] h-[80vh] mx-auto mt-10 md:mt-4 p-4 overflow-auto border shadow-lg border-slate-400 rounded-lg w-[85%] md:w-[70%] transition-all duration-300 ease-in-out"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Itemdetails selectedItem={selectedItem} onClose={closeModal} />
        </Suspense>
      </Modal>
    </>
  );
}

export default App;
