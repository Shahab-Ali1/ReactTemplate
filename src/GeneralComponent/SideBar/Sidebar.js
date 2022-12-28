import React from 'react'
import './SideBar.css'
import { Link } from '../../Components/SharedComponent/ShareComponent'

export const Sidebar = (props) => {

    return (
        <React.Fragment>
            <div className="sidebar">
                <Link className='active' to="/">Home</Link>
                <Link to="/About">News</Link>
                <Link to="/About">About</Link>
            </div>

        </React.Fragment>
    )
}