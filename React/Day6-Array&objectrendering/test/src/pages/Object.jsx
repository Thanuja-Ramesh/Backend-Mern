

const Object = () => {
  const employee={EmployeeID: "EMP101", Name:"Himasri",
                  Designation:"Mern Developer", Salary:"80000", Company:"Accenture"
  }
  
  
    return (
   <>
   <div className="p-10 bg-amber-100 items-center text-center">
    <h1>Task-2</h1>
    <h1><b>Employee Details</b></h1>
    <h2>EmployeeID:{employee.EmployeeID}</h2>
    <h2>Name:{employee.Name}</h2>
    <h2>Designation:{employee.Designation}</h2>
    <h2>Salary:{employee.Salary}</h2>
    <h2>Company:{employee.Company}</h2>
    



   </div>
   
   
   </>
  )
}

export default Object
