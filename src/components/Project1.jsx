import { useState } from "react"

const Project1 = () => {

  const [count,setCount] = useState(0) 

  function Increment() {
    setCount(count+1)
  }

  function Decrement() {
    setCount(count-1)
  }

  function Reset() {
    setCount(0)
  }

  const buttonStyle = " px-5 py-4 rounded-3xl font-semibold bg-gray-800 shadow-2xl border-0 shadow-white transition-shadow"

  return (
    <div className=" w-full gap-y-4 h-[100vh] bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className=" text-6xl font-bold ">Count:{count}</h1>
      <div className=" flex gap-x-10 justify-center items-center">
      <div className=" px-5 py-4 rounded-3xl font-semibold bg-gray-800 shadow-2xl shadow-white border-dotted" onClick={Decrement}>Decrement</div>
      <div className={buttonStyle} onClick={Reset}>Reset</div>
      <div className={buttonStyle}  onClick={Increment}>Increment</div>
      </div>
    </div>
  )
}

export default Project1
