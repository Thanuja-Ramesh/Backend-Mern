import { useEffect, useState } from "react"


const Home = () => {
  const [showdatas,setShowDatas]=useState([])


  const fetchDatas=async()=>{
    

    try{
      const datas=await fetch("https://dummyjson.com/recipes")
      // console.log(datas);
      const parseData=await datas.json()
      console.log(parseData.recipes);
      setShowDatas(parseData.recipes)
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
    {
      showdatas.map((e,i)=>(
        <div key={e.id}>
          <img src={e.image} alt="" style={{width:"100px"}} />
          <h2><b>Name:</b>{e.name}</h2>
          <p><b>Ingredients:</b>{e.ingredients}</p>
        </div>
      ))
    }
    
    </>
  )
}

export default Home
