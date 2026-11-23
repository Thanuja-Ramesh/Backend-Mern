import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
   <>
  <div className="bg-black text-white flex p-5 justify-between items-center">
        <div className="mx-5 flex gap-5 font-semibold text-2xl">Todo</div>
        <div className="gap-10 flex font-semibold text-xl">
      <NavLink to="/">Todo</NavLink>
      <NavLink to="/todosave">Todo for Save Data</NavLink>
      </div>
  </div>
   
   </>
  )
}

export default NavBar
