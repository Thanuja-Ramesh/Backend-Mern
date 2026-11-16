

const Product = () => {
    const Products ={id:786, name:"Samsung",price: 199999,
        brand:"Samsung M-15",category:"Electronics"

    }



  return (
    <>
    
    <div className="bg-black text-white text-center p-5">
        <h1>Task-3</h1>
        <h2>Project Details Using Object</h2>
        <h2>Product Name:{Products.name}</h2>
        <h2>Brand:{Products.brand}</h2>
        <h2>Category:{Products.category}</h2>
        <h2>Id:{Products.id}</h2>
        <h2>Original Price: ${Products.price}</h2>
        <h2><b>{Products.price*0.9}</b></h2>


        
        </div>
        </>
  )
}

export default Product
