import React, { useState } from 'react'
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import BasePage from '../../BasePage/BasePage';
import { Layout } from '../../GeneralComponent/Layout/Layout';
import AuthRoutes from '../Auth/AuthRoutes/AuthRoutes';

export const Authentication = (props) => {

    const [isAuthenticate, setIsAuthenticate] = useState(false)
    const token = localStorage.getItem("tokendummy") !== null ? JSON.parse(localStorage.getItem("tokendummy")) : ""
    debugger;
    return (
        <React.Fragment>
            {/* <Router> */}
                {
                    isAuthenticate ? (
                        <Layout> <BasePage /></Layout>

                    ) : (
                        <AuthRoutes />
                    )
                }
            {/* </Router> */}
        </React.Fragment>
    )
}