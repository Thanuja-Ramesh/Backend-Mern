import {Link} from "react-router-dom"
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <>
    <div className="bg-yellow-300 flex shadow-xl justify-between top-0 items-center p-4 fixed w-screen">

        <div className="mx-15 w-20"> 
            <img src={logo} alt="Logo" />

        </div>
        <div className="mx-10 flex gap-15">
            <Link to="/">Home</Link>
            <Link to="/shopping">Shopping</Link>
            <Link to="/celebration">Celebration</Link>
            <Link to="/travel">Travel</Link>
            <Link to="/going back to PG">Going Back to PG</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar
