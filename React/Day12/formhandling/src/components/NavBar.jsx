import { Link } from "react-router-dom"

const NavBar = () => {
  return (
   <>
   <div className="bg-black text-white flex p-5 justify-between items-center">
    <div className="mx-5 flex gap-5 font-semibold text-2xl"> Form Handling</div>
    <div className="gap-10 flex text-xl font-semibold">
        <Link to="/">Home</Link>
        <Link to="/formhandling">Form Handling</Link>
        <Link to="/form">Form Handling in Object</Link>
    </div>
   </div>
   
   </>
  )
}

export default NavBar
