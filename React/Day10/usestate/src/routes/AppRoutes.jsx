import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import ArrofObj from "../pages/ArrofObj"
import Product from "../pages/Product"



const AppRoutes = () => {
  return (
    <>
    <NavBar/>
    <div>
        <Routes>
        <Route path="/" element={<ArrofObj/>}/>
        <Route path="/product" element={<Product/>}/>
        </Routes>
    </div>
    
    </>
  )
}

export default AppRoutes
