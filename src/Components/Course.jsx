import React from 'react'
import '../App.css'
import Coursecomponent from './Coursecomponent'

const Course = () => {
    const coursedata = [
        {
            img: "https://i.pinimg.com/736x/ce/45/5f/ce455f4e7d741fb85eb763cbbdf9e43f.jpg",
            title: "HTML",
            content: "Develop everthing for u !"
        },
        {
            img: "https://i.pinimg.com/736x/ce/45/5f/ce455f4e7d741fb85eb763cbbdf9e43f.jpg",
            title: "HTML",
            content: "Develop everthing for u !"
        },
        {
            img: "https://i.pinimg.com/736x/ce/45/5f/ce455f4e7d741fb85eb763cbbdf9e43f.jpg",
            title: "HTML",
            content: "Develop everthing for u !"
        },


    ]
    return (
        <div className='course-container p-4'>
            <h3>Course</h3>
            <ul className='course-ul'>
                <li><a href="#">In progress</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Incomming</a></li>
                <li><a href="#">Finished</a></li>
            </ul>
            <div className='d-flex gap-3 justify-content-center align-items-center'>
                {
                    coursedata.map((e) => {
                        return (<Coursecomponent {...e} />)
                    })
                }
            </div>


        </div>
    )
}

export default Course
