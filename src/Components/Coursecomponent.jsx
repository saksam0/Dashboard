import React from 'react'
import '../App.css'
const Coursecomponent = (props) => {
    return (
        <div className="">
            <div className='course-card '>
                <div className='left'>
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                    <button>Sub now</button>
                </div>
                <img src={props.img} alt="" />
            </div>
        </div>

    )
}

export default Coursecomponent
