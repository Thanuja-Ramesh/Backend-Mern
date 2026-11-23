import { useState } from "react"

const Todo=()=>{
  
  const [todo,setTodo]=useState()
  const [saveData,setSaveData]=useState([])
  const [editId,setEditId]=useState(null)
 
 
 const handleChange=(e)=>{
  setTodo(e.target.value)
 }

 const handleAdd=(e)=>{
  const data={id:Date.now(),todo}
  if(!todo){
    alert("Please Fill the Form")
    return
  }
  setSaveData((p)=>[...p,data])
 }
 const handleUpdate=()=>{
  setSaveData((p)=>[...p].map((e,i)=>e.id==editId?{...e,todo}:e))
  setEditId(null)
  setTodo(" ")
 }

 const handleEdit = (data)=>{
  setTodo(data.todo)
  setEditId(data.id)
 }

 const handleDelete = (id)=>{
  const copy = [saveData]
  const del=copy.filter((e,i)=>e.id!==id)
  setSaveData(del)
 }
 
  return(
    <>
    <div className="my-5">
      <input value ={todo} onChange={handleChange} className="border rounded w-50 p-2 mx-5"/>
       {editId==null?<button className='bg-blue-700 text-white p-2 rounded w-30' onClick={handleAdd}>Add</button>
        :<button className="bg-purple-700 text-white p-2 rounded w-30" onClick={handleUpdate}>Update</button>}

</div>
<div className="p-10 flex justify-around items-center">
  {
    saveData.map((e,i)=>
      <div key={e.id} className="border p-5 flex justify-around gap-2">
     <h1>{e.id}</h1>
     <p>{e.todo}</p>
     <button onClick={()=>handleEdit(e)} className="bg-amber-600 text-white p-1 rounded w-30">Edit</button>
      <button onClick={()=>handleDelete(e.id)} className="bg-amber-600 text-white p-1 rounded w-30"> Delete</button>
      </div>
    )
  }

</div>

    
    
    </>
  )
 


}
export default Todo




