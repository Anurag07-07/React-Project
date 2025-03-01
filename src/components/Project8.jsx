import { useState } from "react"

const Project8 = () => {

  const [currentIndex,setcurrentIndex] = useState(0)
  const testimonials = [
    {
      quote: "This platform has completely changed the way I learn. The AI tutor is amazing!",
      author: "Amit Sharma"
    },
    {
      quote: "I never imagined an LMS could be this interactive and engaging. Kudos to the team!",
      author: "Priya Verma"
    },
    {
      quote: "The real-time doubt resolution feature is a game changer. I highly recommend it!",
      author: "Rohit Mehta"
    },
    {
      quote: "A well-designed system that makes learning both fun and effective. Love the AI features!",
      author: "Neha Kapoor"
    },
    {
      quote: "The personalized dashboard helped me identify my weak areas and improve efficiently.",
      author: "Suresh Nair"
    }
  ];

  const prevIndex = ()=>{
      setcurrentIndex((currentIndex-1+testimonials.length)%testimonials.length)
  }

  const nextIndex = ()=>{
    setcurrentIndex((currentIndex+1)%testimonials.length)
  }
    

  return (
    <div className=" bg-cyan-400 w-full gap-y-5 h-[100vh] flex flex-col justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <div className=" font-bold text-4xl text-center">
          {
            testimonials[currentIndex].quote
          }
        </div>
        <div className=" font-extralight text-3xl">
          {
            testimonials[currentIndex].author
          }
        </div>
      </div>
      <div className=" flex gap-x-7">
        <button className=" border-2 px-7 rounded-l-full font-extralight hover:scale-105 transition-all duration-300 hover:bg-white hover:text-black shadow-inner shadow-white" onClick={prevIndex}>Prev</button>
        <button className=" border-2 px-7 rounded-r-full font-extralight hover:scale-105 transition-all duration-300 hover:bg-white hover:text-black shadow-inner shadow-white" onClick={nextIndex}>Next</button>
      </div>
    </div>
  )
}

export default Project8
