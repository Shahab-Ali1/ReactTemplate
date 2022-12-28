import React from 'react'
import './Navbar.css'
import { useNavigate, } from 'react-router-dom';
import { Button, Link } from '../../Components/SharedComponent/ShareComponent'
import { getToken } from '../../Utility/GenericMethods/GenericMethods'
export const Navbar = (props) => {

    //#region objects
    const navigate = useNavigate()
    //#endregion
    
    /* logout functionality */
    const clickLogout = () => {
        try {
            let token = getToken()
            if(token !== "") {
                localStorage.removeItem("tokendummy")
                // window.location.href = "/Login"
                navigate("/Login", { replace: true })
                // navigate({to: '/Login'})
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <React.Fragment>
            <ul>
                <li><Link to="/">WebSite Name</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">News</Link></li>
                <li><Link to="/About">about</Link></li>
                <div className="d-flex justify-content-end mt-2">
                    <Button type="submit" className="btn btn-primary" onClick={clickLogout}>Logout</Button>
                </div>
            </ul>            
        </React.Fragment>
    )
}