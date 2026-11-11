import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Service from "../pages/Service"
import Login from "../pages/Login"
import Register from "../pages/Register"
import AuthLayout from "../layout/AuthLayout"
import HooksProcess from "../pages/HooksProcess"


const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/hooks" element={<HooksProcess/>} />
        </Route>



        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>
    </>
  )
}

export default AppRoutes
