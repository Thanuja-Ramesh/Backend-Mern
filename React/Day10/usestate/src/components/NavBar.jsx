import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-black text-white flex p-5 justify-between items-center">
        <div className="mx-5 flex gap-5 font-semibold text-2xl">Logo</div>
        <div className="gap-10 flex font-semibold text-xl">
            <Link to="/">Array of Object</Link>
            <Link to="/product">Product using reduce in useState</Link>
        </div>
    </div>
    
    </>
  )
}

export default NavBar
