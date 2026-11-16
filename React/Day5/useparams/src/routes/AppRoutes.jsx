import { Route, Routes } from "react-router-dom"
import HooksProcess from "../pages/HooksProcess"
import ProductListing from "../pages/ProductListing"

import NavBar from "../components/NavBar"
import UseState from "../pages/UseState"
import Product from "../components/Product"



const AppRoutes = () => {
  return (
  
   <>
   <NavBar/>

   <Routes>
    <Route path="/" element={<ProductListing/>} />
    <Route path="/hooks" element={<HooksProcess/>} />
    <Route path="/productlist/:productid" element={<Product/>} />
    <Route path="/usestate" element={<UseState/>}/>
    
    
   </Routes>
   
   </>
  )
}

export default AppRoutes
