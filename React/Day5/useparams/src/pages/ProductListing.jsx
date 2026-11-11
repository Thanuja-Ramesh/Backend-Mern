

import { useNavigate } from "react-router-dom"

const ProductListing = () => {

    const navigate = useNavigate()

  const datas = [

    {productname:"HeadPhone",price:"₹499.00"},
    {productname:"Mouse",price:"₹799.00"},
    {productname:"Keyboard",price:"₹899.00"},
    {productname:"Speaker",price:"₹999.00"}

]


const handleBuy = (userid)=>{

    navigate(`/productlist/${userid}`,{state:[1,2,3,4,5]})

}   


  return (
    <>
    <div className="p-10 flex gap-25 justify-center items-center h-100">
        {datas.map((e,i)=>(
            <div key={i} className="shadow border rounded-4xl p-2 w-50 text-center">
                <h3>{e.productname}</h3>
                <p>{e.price}</p>
                <button onClick={()=>handleBuy(i)} className="bg-blue-400 my-3 text-center  rounded border-0 p-1 w-30 text-white">Buy Now</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProductListing
