import { useState } from "react"

const Project4 = () => {

  const [newvalue,setnewValue] = useState('')

  
  const display = (value)=>setnewValue(newvalue+value)
  
  const Evalute = ()=>{
    setnewValue(eval(newvalue))
  }

  const clear = ()=>setnewValue('')


  return (
    <div className=" text-white bg-gray-800 w-full h-[100vh] flex flex-col justify-center items-center">
      <div>
          <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center w-[560px] rounded-t-4xl hover:bg-gradient-to-l from-red-800 to-red-500 hover:text-black font-extrabold text-4xl" onClick={()=>Evalute('=')}>Noob Calculator</span>
      </div>
      <form>
        <div className=" flex border-2 py-4 px-6">
        <input type=" text " className=" font-extrabold text-4xl" value={newvalue}></input>
        <button onClick={()=>clear()} className=" w-[60px] border-2 rounded-3xl py-2 font-bold hover:bg-white hover:text-black">Clear</button>
        </div>
        <div className=" grid grid-cols-4 border-2" > 
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('0')}>0</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('1')}>1</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('2')}>2</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('3')}>3</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('4')}>4</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('5')}>5</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('6')}>6</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('7')}>7</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('8')}>8</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-yellow-400 hover:text-black font-extrabold text-4xl" onClick={()=>display('9')}>9</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-gradient-to-l from-red-800 to-red-500 hover:text-black font-extrabold text-4xl" onClick={()=>display('+')}>+</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-gradient-to-l from-red-800 to-red-500 hover:text-black font-extrabold text-4xl" onClick={()=>display('*')}>*</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-gradient-to-l from-red-800 to-red-500 hover:text-black font-extrabold text-4xl" onClick={()=>display('-')}>-</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-gradient-to-l from-red-800 to-red-500 hover:text-black font-extrabold text-4xl" onClick={()=>display('/')}>/</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-gradient-to-l from-red-800 to-red-500 hover:text-black font-extrabold text-4xl" onClick={()=>display('%')}>%</span>
        <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-gradient-to-l from-red-800 to-red-500 hover:text-black font-extrabold text-4xl" onClick={()=>display('**')}>**</span>
        </div>
        <div>
          <span className=" border-2 shadow-2xl shadow-white p-2 m-3 flex justify-center items-center rounded-b-4xl hover:bg-gradient-to-l from-red-800 to-red-500 hover:text-black font-extrabold text-4xl" onClick={()=>Evalute('=')}>Evaluate</span>
        </div>
      </form>
    </div>
  )
}

export default Project4