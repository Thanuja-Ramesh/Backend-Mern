import { useNavigate } from "react-router-dom"


const HooksProcess = () => {
    const navigate = useNavigate()
    const handleBack = ()=>{
        navigate(-1)

    }

    const handleForward = ()=>{
        navigate(1)

    }

    const handleLogin = ()=>{
        navigate("/login")

    }

  return (
   <>
   <div className="m-20 flex gap-10">
   <button onClick={handleBack}>Back</button>
    <button onClick={handleForward}>Forward</button>
    <button onClick={handleLogin}>Login</button>
   
   </div>
   </>
  )
}

export default HooksProcess
