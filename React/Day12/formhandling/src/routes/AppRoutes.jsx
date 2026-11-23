import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import FormHandling from "../pages/FormHandling"
import NavBar from "../components/NavBar"
import FormHandlinginObject from "../pages/FormHandlinginObject"



const AppRoutes = () => {
  return (
    <>
    <div>
      <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/formhandling" element={<FormHandling/>}/>
            <Route path="/form" element={<FormHandlinginObject/>}/>
        </Routes>
    </div>
    
    </>
  )
}

export default AppRoutes
