import { useState } from "react"
import { FaSearch } from "react-icons/fa"

const Project6 = () => {

  const [showInput,setInput] = useState(false)
  const [color,setColor] = useState({
    bgColor:'white',
    color:'black'
  })

  const changeThing =()=>{
    setInput(true)
    setColor({
      bgColor:'black',
      color:'white'
    })
  }

  return (
    <div style={{backgroundColor:color.bgColor,color:color.color}} className=" w-full h-[100vh] justify-center items-center transition-all duration-700 ">
      {
        showInput== true ? (
          <div className=" w-full h-[100vh] flex flex-col gapy justify-center items-center"><input type="text" className=" border-white border-2 px-6 py-3 rounded-2xl  flex justify-center items-center shadow-2xl shadow-white hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-inner hover:shadow-black" placeholder="Enter Something" ></input></div>
        ):(<div className="  h-[100vh] flex justify-center items-center"><FaSearch size={80} className=" border-4 rounded-full p-3 hover:bg-black hover:text-white duration-700 transition-all shadow-2xl shadow-black" onClick={changeThing}></FaSearch></div>) 
      }
    </div>
  )
}

export default Project6