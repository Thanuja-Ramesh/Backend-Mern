import { useState } from "react"


const FormHandlinginObject = () => {
    const [obj,setObj]=useState({usertask:"",taskdate:"",status:""})

    const [savedata,setSaveData]=useState([])

    const [editId,setEditId] = useState(null)

    const handleChange=(e)=>{
        setObj({...obj,[e.target.name]:e.target.value})
        // console.log(obj);
        


    }
    const handleAdd=(e)=>{

        e.preventDefault()
        const copy=[...savedata]
        copy.push(obj)
        setSaveData(copy)

        alert("Data Successfully Added")



        setObj({usertask:"",taskdate:"",status:""})


    }

    const handleEdit=(e,i)=>{
        setObj(e)
        setEditId(i)
    }

    const handleDelete=(userid)=>{
        setSaveData((p)=>[...p].filter((e,i)=>i!==userid))

    }




  return (
    <>
    <form>
        <input type="text" name="usertask" placeholder="Enter the Task" onChange={handleChange} value={obj.usertask} />
        <input type="date" name="taskdate"  onChange={handleChange} value={obj.taskdate} />
        <input type="text" name="status" placeholder="Enter the Status" onChange={handleChange} value={obj.status} />
        <button onClick={handleAdd}>Task Add</button>
    </form>
    <div>
        {savedata.length == 0 ? ("No Data"):(savedata.map((e,i)=>(
            <div key={i}>
                <h2>{e.usertask}</h2>
                <p>{e.taskdata}</p>
                <p>{e.status}</p>

                <button onClick={()=>handleEdit(e,i)}>Edit</button>
                <button onClick={()=>handleDelete(i)}>Delete</button>
            </div>
        ))
        )}
    </div>
    
    </>
  )
}

export default FormHandlinginObject
