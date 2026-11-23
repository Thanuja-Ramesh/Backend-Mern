import { useEffect, useState } from "react"


const App = () => {
  const[mydatas,setMyDatas]=useState({username:"", useremail:"", userage:""})
  const [showdata,setShowData]=useState([])

  const handleChange=(e)=>{
    setMyDatas((p)=>({...p,[e.target.name]:e.target.value}))

  }

  const handleClick=(e)=>{
    e.preventDefault()
    const getLocalData=JSON.parse(localStorage.getItem("sladb")) || []
    getLocalData.push(mydatas)
    // console.log(getLocalData);
    localStorage.setItem("sladb",JSON.stringify(getLocalData))
    alert ('Successfully Done')
    setMyDatas((p)=>({...p,[e.target.name]:e.target.value}))

  }

  const getDatas=()=>{

    let getLocalData=JSON.parse(localStorage.getItem("sladb"))

    setShowData(getLocalData)

  }
  useEffect(()=>{
    getDatas()
  },[mydatas])

  
  
  return (
    <>
    <form>
      <input type="text" name="username" onChange={handleChange} placeholder="Enter the Name" value={mydatas.username} />
      <input type="email" name="useremail" onChange={handleChange} placeholder="Enter the Email" value={mydatas.useremail} />
      <input type="age" name="userage" onChange={handleChange} placeholder="Enter the Age" value={mydatas.userage} />
       <button onClick={handleClick}>Add Data</button>
    </form>

    <div>
      {showdata.length == 0 ? <p>No Data Found</p>:showdata.map((e,i)=>{
        <div key={i}>
          <h2>{e.usernam}</h2>
          <p>{e.useremail}</p>
          <p>{e.age}</p>
        </div>
      })}
    </div>
    </>
  )
}

export default App