import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div>
        <div>Logo</div>
        <div>

        
        <Link to="/">ProductListing</Link>
        <Link to="/hooks">Hooks</Link>
    </div>
    </div>
    
    </>
  )
}

export default NavBar
