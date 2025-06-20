import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import AddItem from "./Components/AddItem"
import ViewItem from "./Components/ViewItem"


function App() {

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<AddItem/>} />
          <Route path="/view" element={<ViewItem/>} />
        </Routes>
    </>
  )
}

export default App
