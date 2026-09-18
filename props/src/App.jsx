import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='main'>
      <Card user='Abhinav' age={19} />
      <Card user='Somesh' age={18} />
      <Card user='Harsh' age={18} />
    </div>
  )
}

export default App
