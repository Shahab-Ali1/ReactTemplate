import React from 'react'
import { useSelector } from 'react-redux';
import BasePage from '../../BasePage/BasePage';
import { Layout } from '../../GeneralComponent/Layout/Layout';
import { getToken } from '../../Utility/GenericMethods/GenericMethods';
import AuthRoutes from '../Auth/AuthRoutes/AuthRoutes';

export const Authentication = (props) => {

    const token = getToken()
    const { authToken } = useSelector((state) => state.AuthReducer)
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