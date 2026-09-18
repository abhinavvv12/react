import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const onSubmitHandler = (e)=>{
    e.preventDefault()
    setTitle('');
  }
  const onChangeHandler = (e)=>{
    setTitle(e.target.value);
    console.log(e.target.value);
    
  }
  return (
    <div>
      <form onChange={(e)=>{
          onChangeHandler(e)
        }} 
        onSubmit={(e)=>{
        onSubmitHandler(e)
      }} >
        <input type="text" placeholder='Enter your Name' value={title} />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
