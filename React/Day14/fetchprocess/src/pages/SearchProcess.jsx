
import React, { useEffect, useState } from 'react'

const SearchProcess = () => {

    const [showdatas, setShowDatas] = useState([])
    const [search,setSearch] = useState("")
    const [category,setCategory] = useState("")

    const fetchDatas = async () => {
        try {
            const fetchData = await fetch("https://dummyjson.com/products")

            const saveDatas = await fetchData.json()

            console.log(saveDatas.products)

            setShowDatas(saveDatas.products)
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleChange=(e)=>{
        setSearch(e.target.value)

    }
    let searchProduct=[...showdatas]
    if(search){
        
    searchProduct = searchProduct.filter((e,i)=>e.title.toLowerCase().includes(search.toLowerCase()))
        // console.log(searchProduct);
        
    }
    const DuplicateRemove= [...new Set(showdatas.map((e)=>e.category))]           
    console.log(DuplicateRemove);

    const handleCat=(e)=>{
        setCategory(e.target.value)

    }
    if(category){
        searchProduct = searchProduct.filter((e)=>e.category===category)
    }
    

    useEffect(() => {
        fetchDatas()
    }, [])

    return (
        <>

            <div>
                <div>
                    <input type="text"onChange={handleChange} placeholder='Search by name...' />
                   <select onChange={handleCat}>
                    <option value="">Select One...</option>
                    {
                        DuplicateRemove.map((e)=>(
                            <option value={e}>{e}</option>
                        ))
                    }
                   </select>
              
              
                </div>
                {searchProduct.length===0?(<p>No datas Found</p>):(searchProduct.map((e, i) => (
                    <div key={e.id}>
                        <h3>{e.title}</h3>
                        <p>{e.category}</p>
                        <p>{e.price}</p>
                    </div>
                )))}
            </div>
        </>
    )
}

export default SearchProcess








// import React, { useEffect, useState } from 'react'

// const SearchProcess = () => {
//     const[showdatas,setShowDatas]=useState([])
//     const fetchtheProduct=async()=>{
//         try{
//     const res=await fetch("https://dummyjson.com/products")  
//     const saveDatas=await res.json() 
//     console.log(saveDatas.products);
//     setShowDatas(saveDatas.products)
//      }
//         catch{
//             console.log(error)
//          }
//     }
//     useEffect(()=>{
//        res()
//     },[])
   

//   return (
//     <>
//     <div>
//         {showdatas.map((e,i)=>(
//             <div>
//                 <h3>{e.title}</h3>
//                 <p>{e.category}</p>
//                 <p>{e.price}</p>
//             </div>
//         ))
        
//         }
//     </div>
    
//     </>
//   )
// }

// export default SearchProcess
