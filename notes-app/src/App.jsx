import React, { useState } from "react"
import { X } from "lucide-react"

const App = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [task, setTask] = useState([])

  const onSubmitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({title, description})

    setTask(copyTask)
    console.log(copyTask);
    

    setTitle('');
    setDescription('');
  }

  const onChangeHandlerTitle = (e)=>{
    setTitle(e.target.value);
  }

  const onChangeHandlerDescription = (e)=>{
    setDescription(e.target.value);
  }

  const onClickHandler = (idx)=>{

    const copyTask = [...task]

    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className="bg-white text-white h-full w-full md:flex flex-row ">
      <form onSubmit={(e)=>{
        onSubmitHandler(e)
      }} className="bg-black flex flex-col items-start gap-4 p-15 sm:w-full md:w-1/2 h-screen" >
        <input onChange={(e)=>{
          onChangeHandlerTitle(e)
        }} className="bg-black border-2 w-full px-2 py-2 rounded-xl font-medium border-white outline-none" type="text" placeholder="Enter Notes Title" value={title} />
        <textarea onChange={(e)=>{
          onChangeHandlerDescription(e)
        }} className="bg-black border-2 font-medium h-30 w-full px-2 py-2 rounded-xl border-white outline-none" name="" id="" placeholder="Enter Details" value={description}></textarea>
        <button className="bg-white text-black active:scale-95 w-full px-2 py-2 font-medium rounded-2xl border-white outline-none cursor-pointer"  >Add Note</button>
      </form>

      <div className=" bg-black sm:w-full md:w-1/2 h-screen p-10 ml-1 ">
        <h1 className="mb-4 font-bold text-4xl" >Recent Notes</h1>
        <div className=" form bg-black w-full h-full overflow-auto flex md:flex flex-wrap lg:gap-6 sm:gap-2">
          {task.map(function(elem, idx){
            return <div key={idx} className="bg-white bg-cover h-60 w-50 rounded-2xl pt-7 text-black text-xl p-2 flex flex-col gap-4 justify-between bg-[url(https://i.pinimg.com/736x/1f/4a/59/1f4a593321a37bb03fe9e391d6d8e7a7.jpg)]">
            <h1 className="font-bold">{elem.title}</h1>
            <p className="text-gray-600">{elem.description}</p>
            <button onClick={()=>{
              onClickHandler(idx)
            }} className="bg-black text-white p-2 text-xs active:scale-95 mb-2  rounded-xl cursor-pointer">Delete</button>
            </div>
          })}
        </div>
      </div>
      
    </div>
  )
}

export default App

