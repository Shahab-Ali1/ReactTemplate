import React from 'react'
import './SideBar.css'
import { Link } from '../../Components/SharedComponent/ShareComponent'

export const Sidebar = (props) => {

    // $("#menu-toggle").click(function (e) {
    //     e.preventDefault();
    //     $("#wrapper").toggleClass("toggled");
    // });

    // var myMovie = document.getElementById('menu-toggle');
    // myMovie.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     var cc = document.getElementById('wrapper');
    //     cc.toggleClass("toggled");
    // });
    return (
        <React.Fragment>
            <div class="sidebar">
                <Link className='active' to="/">Home</Link>
                <Link to="/about">News</Link>
                <Link to="/about">About</Link>
            </div>

        </React.Fragment>
    )
}