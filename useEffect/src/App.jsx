import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  const changeNum = ()=>{
    setNum(num+1);
  }
  const changeNum2=()=>{
    setNum2(num2+10)
  }

  useEffect(function(){
    console.log('useEffect Running...');
    
  },[num]);

  return (
    <div>
     <h1>num {num}</h1>
     <h1>num2 {num2}</h1>

     <button
     onMouseEnter={changeNum}
     onMouseLeave={changeNum2}
     >Hover</button>

    </div>
  )
}

export default App
