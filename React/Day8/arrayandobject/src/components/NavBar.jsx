import { Link } from "react-router-dom"




const NavBar = () => {
  return (
    <div className="bg-black text-white flex p-5 justify-between">
        <div>Logo</div>
        <div className="gap-10 flex">
            <Link to="/">Array</Link>
            <Link to="/object">Object</Link>
             <Link to="/objectprocess">ObjectProcess</Link>
             <Link to="/arrayofobject">Array of Object</Link>
        </div>
      
    </div>
  )
}

export default NavBar
