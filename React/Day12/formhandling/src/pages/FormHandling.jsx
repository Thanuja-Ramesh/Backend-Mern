import { use, useState } from "react";

const FormHandling = () => {

 const [task,setTask] = useState("")

 const [savetask,setSaveTask] = useState([])

 const [editId,setEditId] = useState(null)

  const handleChange = (e)=>{

     setTask(e.target.value)

  }




  const handleClick = ()=>{

    if(!task) {
      alert("Please fill the Input")
      return
    }

    
    const copy = [...savetask]

    // console.log(copy);

    copy.push(task)

    setSaveTask(copy)

    setTask("")
   

  }


  const handleEdit = (element,eid) => {
  
    

     setTask(element)


     setEditId(eid)

      

    
  }
  

  const handleDelete = (userid)=>{


    const copy = [...savetask]

    const deleteData = copy.filter((e,i)=>i!==userid)

    setSaveTask(deleteData)


    // setSaveTask((p)=>[...p].filter((e,i)=>i!==userid))



  }

  const handleUpdate = ()=>{

     setSaveTask((p)=>[...p].map((e,i)=>i==editId?task:e))

     setTask("")

     setEditId(null)

  }
  return (
    <>
      <div>
        <input type="text" onChange={handleChange} placeholder="Enter the Task" value={task} />
        {editId==null?<button onClick={handleClick}>Add Task</button>:<button onClick={handleUpdate}>Update Task</button>}
        
      </div>

      <div>
        <table border={"2"}>
           <thead>
             <tr><th>S.no</th><th>Task Name</th><th>Action</th></tr>
           </thead>
           <tbody>

            {
              savetask.length === 0 ? (<tr><td  colSpan={3}>No Datas Available</td></tr>):(savetask.map((e,i)=>(
              <tr key={i}>
              <td>{i+1}</td>
              <td>{e}</td>
              <td>
                <button onClick={()=>handleEdit(e,i)}>Edit</button> ||
                <button onClick={()=>handleDelete(i)}>Delete</button>
              </td>
            </tr>
             )))
            }
            
           </tbody>
        </table>
        {/* {savetask.map((e,i)=>(

          <div key={i}>
               <h1>{e}</h1>
               
          </div>

        ))} */}
      </div>
    </>
  );
};

export default FormHandling;