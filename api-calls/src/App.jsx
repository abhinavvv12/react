import React from 'react'

// // there are 2 methods to call API's
// 1.fetch
// 2.axios

// example1-
// const getData = async ()=>{
//   const response = await fetch('paste-the-url');
//   console.log(response);
// }


// example2-
// import axios from 'axios'
//  const getData = async ()=>{
//   const response = await axios.get('paste-the-url');
//   console.log(response);
// }

const App = () => {
  
  const getData =()=>{
    console.log('data fetched');
    
  }
  return (
    <div>
      <button onClick={()=>{
        getData()
      }} >Get Data</button>
    </div>
  )
}

export default App
