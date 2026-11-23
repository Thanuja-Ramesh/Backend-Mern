import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className="bg-black text-white  p-5 flex justify-between items-center">
        <div className="font-semibold text-2xl">Fetch Process using useEffect</div>
    <div className="gap-5 flex">
        <Link to="/">Home</Link>
        <Link to="/fetch">Fetch</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/searchprocess">SearchProcess</Link>
      
    </div>
    </div>
  )
}

export default NavBar
