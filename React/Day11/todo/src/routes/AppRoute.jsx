import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import Todo from "../pages/Todo"
import TodoSaveData from "../pages/TodoSaveData"


const AppRoute = () => {
  return (
    <>
    <NavBar/>
    <div>
        <Routes>
           <Route path="/" element={<Todo/>}/>
           <Route path="/todosave" element={<TodoSaveData/>}/>
        </Routes>
    </div>
    
    </>
  )
}

export default AppRoute
