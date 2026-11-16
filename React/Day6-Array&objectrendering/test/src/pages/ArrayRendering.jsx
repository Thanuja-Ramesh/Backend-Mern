

const ArrayRendering = () => {
    const studentList=["Suva","Thanuja","Renita","Monica","Rajitha"]
  return (
    <>
    {
        <div className="bg-amber-500 text-center">
            <h1>Task-4</h1>
            <h1><b>Student List</b></h1>
            {
                studentList.map((e,i)=>(
                    <li key={i}> {e}</li>

                ))
            }
            
        </div>
    }
    
    </>
  )
}

export default ArrayRendering
