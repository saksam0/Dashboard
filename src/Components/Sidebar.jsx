import React from 'react'
import '../App.css'
const Sidebar = () => {
    return (
        <div className='sidebar-container p-4'>
            <div className="logo-title">
                <img src="https://tse4.mm.bing.net/th?id=OIP.9VQNyToOICO0eyRAqBAU8wHaHa&pid=Api&P=0&h=220" alt="" />
                <h3 className='text-decoration-underline' >DASHBOARD</h3>
            </div>
            <ul className=' list-unstyled d-flex flex-column gap-4 p-5 ms-2'>
                <li><a href="#"><i class='bx bxs-home'></i>Home</a></li>
                <li><a href="#"><i class='bx bxs-user'></i>Profile</a></li>
                <li><a href="#"><i class='bx bxs-wallet'></i>Wallet</a></li>
                <li><a href="#"><i class='bx bxs-bar-chart-square'></i>Analysis</a></li>
                <li><a href="#"><i class='bx bx-list-ul'></i>Task</a></li>
                <li><a href="#"><i class='bx bxs-cog' ></i>Setting</a></li>
                <li><a href="#"><i class='bx bxs-help-circle' ></i>Help</a></li>
            </ul>
        </div>
    )
}

export default Sidebar
