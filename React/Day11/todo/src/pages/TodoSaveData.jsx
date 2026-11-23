import React, { useState } from 'react'

const Todo = () => {

   const [inputdata,setInputData] = useState("")
   const [savedata,setSaveData] = useState([])

 const handleChange = (e)=>{

   

   setInputData(e.target.value)

 }


 const handleClick = ()=>{

   const obj = {id:Date.now(),inputdata}

    setSaveData((p)=>[...p,obj])

 }

  return (
      
      <>
      {/* <h1>{inputdata}</h1> */}
      <input type="text"  onChange={handleChange} className="border rounded w-30 p-2 mx-5 my-5 justify-around" />
      <button onClick={handleClick} className="bg-amber-600 text-white p-1 rounded w-30" >Click</button>

      <div>
         {savedata.map((e,i)=>(
            <div key={i} >
               <p >{e.id}</p>
            <p>{e.inputdata}</p>
            </div>
         ))}
      </div>
      </>
  )
}

export default Todo