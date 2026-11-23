import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Fetch from "../pages/Fetch"
import Timer from "../pages/Timer"
import NavBar from "../components/NavBar"
import SearchProcess from "../pages/SearchProcess"

const AppRoutes = () => {
  return (
    <>
   <NavBar/>
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/fetch" element={<Fetch/>}/>
            <Route path="/timer" element={<Timer/>}/>
            <Route path="/searchprocess" element={<SearchProcess/>}/>

        </Routes>
    </div>
    
    </>
  )
}

export default AppRoutes
