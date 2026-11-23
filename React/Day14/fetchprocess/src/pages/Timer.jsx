import { useState } from "react"


const Timer = () => {
  const [count,setCount]=useState(0)
  const [timer,setTimer]=useState(null)

  const handleClick=()=>{
    if(timer){
      clearInterval(timer)
      setTimer(null)
      return
    }
    const timers=setInterval(()=>{
      setCount((p)=>p+1)
 
      
    },1000)
    setTimer(timers)
  }
  return (
    <>
    <div className="items-center justify-center gap-5 p-5">
    <h2 className="text-2xl font-semibold">Count:{count}</h2>
    <button className="bg-amber-400 p-3 text-2xl font-semibold" onClick={handleClick}>{timer?"Stop":"Start"}</button>
    </div>
    </>
  )
}

export default Timer
