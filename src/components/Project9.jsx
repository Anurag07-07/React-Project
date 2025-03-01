import { useState } from "react"

const Project9 = ({id,title,content}) => {

  const [isActive,setisActive] = useState(false)

  return (
    <div>
      <h1>{title}</h1>
      <div onClick={()=>setisActive(!isActive)}>
        {
          isActive ? <h1 className=" border-2 px-7 rounded-r-full font-extralight hover:scale-105 transition-all duration-300 hover:bg-white hover:text-black shadow-inner shadow-white">+</h1>:<h1 >-</h1>
        }
      </div>
      <div>
        {
          isActive ? (<h1></h1>):(<h1>{content}</h1>)
        }
      </div>
    </div>
  )
}

export default Project9