import { Route, Routes } from "react-router-dom"

import Array from "../pages/Array"
import NavBar from "../components/NavBar"
import ObjectProcess from "../pages/ObjectProcess"
import Object from "../pages/Object"
import ArrayofObject from "../pages/ArrayofObject"


const AppRoutes = () => {
  return (

   <>

   <NavBar/>
   <Routes>
    <Route path="/" element={<Array/>} />
    <Route path="/object" element={<Object/>} />
    <Route path="/objectprocess" element={<ObjectProcess/>} /> 
    <Route path="/arrayofobject" element={<ArrayofObject/>} />   




   </Routes>
   
   
   
   </>
  )
}

export default AppRoutes
