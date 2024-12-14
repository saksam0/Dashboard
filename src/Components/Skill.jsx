import React from 'react'
import '../App.css'
import './Skillcomponent'
import Skillcomponent from './Skillcomponent'
const Skill = () => {
    const skilldata = [
        {
            img: "https://i.pinimg.com/736x/ce/45/5f/ce455f4e7d741fb85eb763cbbdf9e43f.jpg",
            title: "HTML",
            content: "Develop everthing for u !"
        },
        {
            img: "https://i.pinimg.com/736x/ee/b3/5d/eeb35df1a6739f4cea43ed1cba70bc25.jpg",
            title: "CSS",
            content: "Develop everthing for u !"
        },
        {
            img: "https://i.pinimg.com/736x/28/b0/d1/28b0d189571e22609f0e9378da7b09a4.jpg",
            title: "JS",
            content: "Develop everthing for u !"
        },
        {
            img: "https://i.pinimg.com/736x/3e/7b/80/3e7b80011cddd3c1f8725bc416d389f6.jpg",
            title: "Reakach",
            content: "Develop everthing for u !"
        },

    ]
    return (
        <div className='skill-container p-4'>
            <h3>Skill</h3>
            <div className="card-container">
                {skilldata.map((e) => {
                    return (<Skillcomponent {...e} />)
                })}
            </div>
        </div>
    )
}

export default Skill
