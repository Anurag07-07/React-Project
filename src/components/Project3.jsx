import axios from "axios"
import { useEffect, useState } from "react"

const Project3 = () => {

  const [data,setData] = useState([])

  useEffect(()=>{

   axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
   .then((res)=>(
    // console.log(res.data.meals)
    setData(res.data.meals)
   )) 
  })

  console.log(data);
  

  return (
    <div className=" grid grid-cols-4 gap-x-2 gap-y-3">
      {
        data.map(({idMeal,strMeal,strMealThumb})=>{
          return(
          <div key={idMeal} className=" border-2 flex flex-col gap-x-4 relative ">
            <div className="" >
            <img src={strMealThumb}></img>
            </div>
            <div className=" flex justify-between">
            <h1 className=" relative font-bold text-2xl text-red-700">{strMeal}</h1>
            <h1 className=" relative font-bold text-2xl text-red-800">{`#${idMeal}`}</h1>
            </div>
          </div>
)
        })
      }
    </div>
  )
}

export default Project3