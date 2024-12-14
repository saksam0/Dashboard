import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Components/Sidebar'
import Skill from './Components/Skill'
import Course from './Components/Course'
const App = () => {

  return (
    <div className='dashboard'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='skill-course p-2'>
        <Skill />
        <Course />
      </div>
    </div>
  )
}

export default App
