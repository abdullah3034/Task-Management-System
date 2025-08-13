import * as React from 'react';
import "./navbar.css";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";

function Navbar() {
    const today = new Date();

    // Get weekday name (e.g., Tuesday)
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });

    // Format date as DD/MM/YYYY
    const formattedDate = today.toLocaleDateString('en-GB'); 

    return (
        <div className='nav-main-container'>
            <div>
                <p className='nav-main-text'>Dash<span>Board</span></p>
            </div>
            <div className='nav-search-container'>
                <input placeholder='Search your task here...' />
                <div className='task-read'>
                    <IoIosSearch className='read-icon' />
                </div>
            </div>
            <div className='nav-notification-container'>
                <div className='task-read'>
                    <IoIosNotifications className='read-icon' />
                </div>
                <div>
                    <p className='nav-day-text'>{dayName}</p>
                    <p className='nav-date-text'>{formattedDate}</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
