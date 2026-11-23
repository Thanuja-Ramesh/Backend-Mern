import { useState } from "react"


const ArrofObj = () => {
  const [arr,setarr]=useState(
  [
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Bala", salary: 45000 },
  { id: 3, name: "Kumar", salary: 60000 },
  { id: 4, name: "Vijay", salary: 35000 },
  { id: 5, name: "Priya", salary: 55000 }
])
const handleAdd=()=>{
  const copy=[...arr]
  const filter=copy.filter((e,i)=>e.salary>40000)
 setarr(filter)
}

    return (
    <>

    <div className="bg-amber-100">
        <div className="bg-amber-100 min-h-screen grid grid-cols-2 md:grid-cols-2 gap-5 p-10">
      
      
         {
       arr.map((e,i)=>(
          <div key ={i} className="bg-white flex flex-col rounded-4xl hover:shadow hover:-translate-y-2 transition duration-300 shadow-xl
           gap-5 p-5 items-center">
        <div className="text-center space-y-2">
        <h2 className="text-2xl font-mono text-black">{e.id}</h2>
        <h2 className="text-3xl font-semibold">{e.name}</h2>
        <h2 className="text-xl font-sans">{e.salary}</h2>
        {/* <button onClick={()=>handleUpdate(i)}>Update</button>
        <button onClick={()=>handleDelete(i)}>Delete</button> */}
        </div>


      </div>
      
        ))
      }
      
     
      
    </div>
       <div className="items-center flex justify-center ">
      <button className="bg-black rounded w-30 h-10 text-white font-semibold text-2xl " onClick={handleAdd}>Filter</button>
      </div>
    </div>
  
    </>
  )
}

export default ArrofObj
