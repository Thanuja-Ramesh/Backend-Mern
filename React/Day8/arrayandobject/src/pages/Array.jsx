import { useState } from "react"


const Array = () => {
    const [arr, setArr]=useState(["Samsung","Vivo","Galaxy","Oppo"])
  
  const handleClick=()=>{
    let copy=[...arr]
    copy.push("Narzo","Realme")
    setArr(copy)
  }

  const handleUpdate=(eid)=>{
    let copy=[...arr]
    copy[eid] = "Redmi"
    setArr(copy)
  }

  const handleDelete=(del)=>{
    let copy=[...arr]
    let deleteData=copy.filter((e,i)=>i!==del)
    setArr(deleteData)
  }
  
  
  
  
  
    return (
<>
<div className="bg-amber-100 flex gap-5 text-black p-10 h-140 justify-between items-center">
  
    <h1 className="flex text-black">Array Process using useState | Add | Delete | Update</h1>
  
       
       
        {
            arr.map((e,i)=>(
               
               <div >
                 <p className="flex justify-center items-center mr-20 font-semibold text-2xl" key={i}>{e}</p>
                <button onClick={()=>handleUpdate(i)} className="bg-white rounded my-5 p-1 text-black w-30">Update</button>
                
                <button onClick={()=>handleDelete(i)} className="bg-white rounded p-1 text-black w-30">Delete</button>


               </div>
            ))
        }
        <button onClick={handleClick} className="bg-white rounded p-1 text-black w-30 ">Click to Add</button>

    </div>
    
    </>
  )
}

export default Array
