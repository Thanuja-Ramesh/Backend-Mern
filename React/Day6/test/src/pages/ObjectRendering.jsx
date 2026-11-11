

const ObjectRendering = () => {
  const student={Name:"Thanuja Ramesh", Age:24, Course:"Mern", City:"Gudiyatham"}
  
  
    return (
    <div className="p-10 bg-amber-200 text-center items-center">
        <h1>Task-1</h1>
        <h2><b>Student Profile</b></h2>
        <h3>Name:{student.Name}</h3>
        <h3>Age:{student.Age}</h3>
        <h3>Course:{student.Course}</h3>
        <h3>City:{student.City}</h3>

      
    </div>
  )
}

export default ObjectRendering
