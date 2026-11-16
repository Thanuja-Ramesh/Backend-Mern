

const CourseDetails = () => {
const details={Course: "Full Stack MERN",Trainer: "Mugund",

Duration: "6 Months", Fees: "₹50,000"}
  return (

    <>
    <div className="bg-gray-500 text-white text-center">
    <h2>Course Details</h2>
    <h2>Course:{details.Course}</h2>
    <h2>Trainer:{details.Trainer}</h2>
    <h2>Duration:{details.Duration}</h2>
    <h2>Fees:{details.Fees}</h2>
    </div>
    </>
  )
}

export default CourseDetails
