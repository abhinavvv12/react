import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4W5se-3sXcI-CuvSm5GbPoSk655stnvqEeWyX1M79KA&s=10" alt="" />
      <h2>{props.user},{props.age}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestiae.</p>
      <button>Click Me</button>
    </div>
  )
}

export default Card
