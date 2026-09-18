import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <img src={props.brandLogo}
                 alt="" />
                <button>Save</button>
            </div>
            <div className="middle">
                <div>
                    <h3>{props.companyName}</h3> <p>{props.datePosted}</p>
                </div>
                <h2>{props.role}</h2>
                <div className="designation">
                    <p>{props.postTag1}</p>
                    <p>{props.postTag2}</p>
                </div>
            </div>
            <div className="bottom">
                <div className='pay'>
                    <h2>{props.pay}</h2>
                    <p>{props.location}</p>
                </div>
                <div className="apply">
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card
