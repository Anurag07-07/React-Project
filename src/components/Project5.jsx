import { useState } from "react"

const Project5 = () => {

  const [backgroundColor,setbackgroundColor] = useState('white')
  const [textcolor,settextColor] = useState('black')
  const [buttonStyle,setbuttonStyle] = useState('white')

  const handlechange = ()=>{
    setbackgroundColor((backgroundColor)=> backgroundColor == 'white' ? 'black':'white' ) 
    settextColor((textcolor)=> textcolor == 'black' ? 'white':'black' ) 
    setbuttonStyle((buttonStyle)=> buttonStyle == 'white' ? 'black':'white' ) 
  }

  return (
    <div style={{backgroundColor:backgroundColor,color:textcolor}} className=" w-full h-[100vh] flex justify-center gap-y-3 items-center flex-col">
      <button onClick={handlechange} style={{buttonStyle,color:textcolor,border:`2px solid ${textcolor}`}} className=" px-4 py-3 rounded-lg shadow-2xl shadow-white " >
        {
          backgroundColor == 'white' ? "Black Theme Click Here":"White Theme Click Here"
        }
      </button>
      <div className=" text-5xl font-extralight">
          There is nothing permanent except change 
      </div>
    </div>
  )
}

export default Project5