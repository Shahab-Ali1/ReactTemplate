import React, { useState, useEffect } from 'react'
import BasePage from '../../BasePage/BasePage';
import { Layout } from '../../GeneralComponent/Layout/Layout';
import { getToken } from '../../Utility/GenericMethods/GenericMethods';
import AuthRoutes from '../Auth/AuthRoutes/AuthRoutes';

export const Authentication = (props) => {

    const token = getToken()
    const [isAuthenticate, setIsAuthenticate] = useState(false)
    useEffect(() => {
        if(token !== "") {
            setIsAuthenticate(true)
        }
        else{
            setIsAuthenticate(false)
        }
    }, [token, isAuthenticate])
    
    debugger;
    return (
        <React.Fragment>
                {
                    // isAuthenticate ? (
                        token !== "" ? (
                        <Layout> <BasePage /></Layout>

                    ) : (
                        <AuthRoutes />
                    )
                }
        </React.Fragment>
    )
}