import { useState } from "react"

const Project2 = () => {

  const [todo,setTodo] = useState([])
  const [value,setValue] = useState('');

  const changeHandler = (e)=>{
    setValue(e.target.value)
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    if (value.length>0) {
      setTodo((todo)=>[...todo,{text:value,id:Math.random()}])
    }
    setValue('')
  }

  const remove = (id)=>{
    const newTodo = todo.filter((v)=>v.id!=id)
    setTodo(newTodo)
  }

  return (
    <div className=" w-full h-[100vh] gap-y-3 flex-col bg-gray-800 text-white flex justify-center items-center">
      <h1 className=" font-bold text-6xl">Todo List</h1>
      <form className=" flex flex-col gap-y-3" onSubmit={submitHandler}>
      <div className=" flex gap-x-3">
      <label className=" font-bold text-2xl" htmlFor="task">Enter The Task:</label>
      <input className=" border-dashed border-2 pl-3 " onChange={changeHandler} type="text" value={value} placeholder="Enter The Task"></input>
      </div>
      <div className=" text-center border-2 rounded-3xl hover:bg-gray-100 hover:text-black">
      <button className="" type="submit">Submit</button>
      </div>
      </form>
      <div>
        {
          todo.map(({text,id})=>{
            return (<div className=" flex gap-x-5 items-center justify-center" key={id}>
              <h1 className=" text-2xl font-extralight">{text}</h1>
              <button className="  bg-gray-500  shadow-2xl hover:bg-white hover:text-black rounded-full px-4 py-2" onClick={()=>{remove(id)}}>X</button>
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default Project2