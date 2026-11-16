import { useState } from "react"


const Object = () => {
    const [obj,setObj]=useState({name:"Samsung",subject:"Mobile",Price:"50000",Brand:["Vivo","Redmi","Realmi","Iphone","Galaxy"]})
     
    const handleClick=()=>{
        // const copy={...obj,brand:"Galaxy"}
        // setObj(copy)
        setObj({...obj,Offer:"49999"})
    }
    const handleUpdate=()=>{
        setObj({...obj,Price:"99999"})
    }
    const handleDelete=()=>{
        setObj({...obj,Price:""})
    }
    
    return (
    <>
    
        <div className="bg-purple-400 items-center justify-center h-100 flex gap-5 p-10 ">
            <div>
                <h1>Object Process using useState</h1>
            <h1>{obj.name}</h1>
            <p>{obj.subject}</p>
            <p>{obj.Price}</p>
            <p>{obj.Offer}</p>
            <div className="my-5">   
                <h3 >Brand:</h3>
            <p>{obj.Brand.map((e,i)=>(
                <span className="flex gap-20">{e}</span>
            ))}</p> 
            </div>
            

        </div>
        <button onClick={handleClick} className="bg-amber-100 rounded-md px-5 py-2 hover:bg-amber-200">Click to add</button>
        <button onClick={handleUpdate} className="bg-amber-100 rounded-md px-5 py-2 hover:bg-amber-200">Click to Update</button>
        <button onClick={handleDelete} className="bg-amber-100 rounded-md px-5 py-2 hover:bg-amber-200">Click to Delete</button>
    </div>

    
    </>
  )
}

export default Object
