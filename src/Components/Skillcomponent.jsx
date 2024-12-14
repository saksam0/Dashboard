import React from 'react'
import '../App.css'
const Skillcomponent = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <h4 className='mt-2'>{props.title}</h4>
        <p>{props.content}</p>
        <button>Sub now</button>
      </div>
    </div>
  )
}

export default Skillcomponent
