import { useState } from "react"


const UseState = () => {
    const [state,setState]=useState(0)
    
  return (
    <>
    <div>
        <h1 className="bg-gray-400 h-10 w-20 p-5 m-10  mx-160 flex items-center justify-center">
            {state}
        </h1>
        <div className="flex items-center justify-center ">
            <button className="bg-emerald-300 m-10 rounded w-30 h-10 items-center justify-center" onClick={()=>setState(state+1)}>Increment</button>
            <button className="bg-emerald-300 m-10 rounded w-30 h-10 items-center justify-center" onClick={()=>setState(state-1)}>Decrement</button>
             <button className="bg-emerald-300 m-10 rounded w-30 h-10 items-center justify-center" onClick={()=>setState(0)}>Reset</button>
        </div>


    </div>
    </>
  )
}

export default UseState
