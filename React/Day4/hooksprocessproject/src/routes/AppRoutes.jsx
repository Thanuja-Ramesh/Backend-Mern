import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Shopping from "../pages/Shopping"
import Celebration from "../pages/Celebration"
import Travel from "../pages/Travel"
import GoingbacktoPg from "../pages/GoingbacktoPg"
import AuthLayout from "../layout/AuthLayout"

const AppRoutes = () => {
  return (
   <>
   
    <Routes>
      <Route element={<AuthLayout/>}>
    <Route path="/" element={<Home/>} />
    <Route path="/shopping" element={<Shopping/>} />
    <Route path="/celebration" element={<Celebration/>} />
    <Route path="/travel" element={<Travel/>} />
    </Route>
    
    
    <Route path="/going back to PG" element={<GoingbacktoPg/>} />
   </Routes>
   </>
  )
}

export default AppRoutes
