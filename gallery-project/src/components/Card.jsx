import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank' >
                <div>
                    <img className='h-50 w-60 object-cover rounded-xl' src={props.elem.download_url} alt="" />
                    <h2 className='font-bold text-xl text-white'>{props.elem.author}</h2>
                </div>
            </a>

        </div>
    )
}

export default Card
