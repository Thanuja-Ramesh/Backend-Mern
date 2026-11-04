import {Link} from "react-router-dom"
import logo from "../assets/react.svg"

const NavBar = () => {
  return (
   <>
   <div className="flex shadow justify-between top-0 items-center p-4 fixed w-screen">
   <div className="mx-15">
    <img src={logo} alt="Logo" />
   </div>
   <div className="mx-10 flex gap-15">
    <Link to ="/">Home</Link>
    <Link to ="/about">About</Link>
    <Link to ="/service">Service</Link>

   </div>
   </div>
   
   </>
  )
}

export default NavBar
