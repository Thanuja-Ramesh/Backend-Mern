import { Route, Routes } from "react-router-dom"
import HooksProcess from "../pages/HooksProcess"
import ProductListing from "../pages/ProductListing"
import Rendering from "../pages/Rendering"
import NavBar from "../components/NavBar"



const AppRoutes = () => {
  return (
  
   <>
   <NavBar/>

   <Routes>
    <Route path="/" element={<ProductListing/>} />
    <Route path="/hooks" element={<HooksProcess/>} />
    <Route path="/productlist" element={<ProductListing/>} />
    <Route path="/rendering" element={<Rendering/>} />
    
   </Routes>
   
   </>
  )
}

export default AppRoutes
