import { useEffect, useState } from "react"


const Fetch = () => {
    const [quotes,setSaveQuotes]=useState([])

    const fetchDatas=async()=>{
      
        try{
          const getDatas=await fetch("https://dummyjson.com/quotes")
          let changeData=await getDatas.json()
          setSaveQuotes(changeData.quotes)
          console.log(changeData);
          
        }
       catch(error){
        console.log(error);
        
        
       }
    }
    
    useEffect(()=>{
     fetchDatas()
  },[])
  return (

    <>
    {quotes.map((e)=>(
      <div key={e.id}>
        <h2><b>Quotes:</b>{e.quote}</h2>
        <h2><b>Author:</b>{e.author}</h2>

      </div>
    ))

    }

    
    
    </>
  )
}

export default Fetch


