import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData(response.data)
    console.log(response);
    console.log(response.data);
    console.log(response.data.author);

  }

  let printUserData = <h3 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx} className=''>
        <Card elem={elem} />
       
      </div>
    })

  }

  useEffect(function () {
    getData()
  }, [index])

  return (
    <div className='bg-black text-white min-h-screen w-full flex flex-col gap-4  justify-items-start items-start overflow-auto '>
      {/* <h1 className='font-bold text-6xl bg-red-900 rounded-full w-fit fixed p-5 right-2 top-2'>{index}</h1> */}
      <div className='p-5 '>
        <div className='flex flex-row flex-wrap gap-4 text-gray-600 '>
          {printUserData}
        </div>

        <br />

        <div className='flex gap-6 justify-items-stretch'>
          <button className='bg-amber-400 cursor-pointer p-2 fixed left-2 bottom-2 rounded-xl text-2xl font-bold' 
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
          }} >Prev</button>

          <h1 className='text-white font-bold text-2xl fixed bottom-4 left-1/2 '>Page {index}</h1>

          <button className='bg-amber-400 cursor-pointer p-2 fixed right-2 bottom-2 rounded-xl text-2xl font-bold' 
          onClick={()=>{
            setIndex(index+1)
            setUserData([])
          }} >Next</button>
      </div>
      </div>
      
    </div>
  )
}

export default App
