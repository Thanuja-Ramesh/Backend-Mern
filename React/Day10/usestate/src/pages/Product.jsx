import { useState } from "react"


const Product = () => {
    const [total,setTotal]=useState([null])
    const [product,setProduct]=useState([
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Monitor", price: 12000 },
  { id: 5, name: "Headphone", price: 2000 }
])
const totalClick=()=>{
    const copy=[...product]
    const total_value=copy.reduce((a,c)=>a+c.price,0)
    setTotal(total_value)
}
  return (
    <>
    <div className="bg-purple-400 min-h-screen grid grid-cols-2 md:grid-cols-2 gap-5 p-10">
        {
            product.map((e,i)=>(
                <div key={i} className="bg-white flex flex-col rounded-4xl hover:shadow hover:-translate-y-2 transition duration-300 shadow-xl
           gap-5 p-5 items-center">
                    <h2 className="text-2xl font-mono text-black">{e.id}</h2>
                    <h1 className="text-3xl font-semibold">{e.name}</h1>
                    <h3 className="text-xl font-sans">{e.price}</h3>
                </div>

            ))
        }
    <div>
        <h1 className="text-2xl font-semibold">{total}</h1>
        <button className="bg-blue-400 rounded w-30 h-10 text-black font-semibold text-2xl " onClick={totalClick}>Total Price</button>
    </div>
    </div>
    
    </>
  )
}

export default Product
