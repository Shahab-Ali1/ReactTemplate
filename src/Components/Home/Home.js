import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetService, getService } from '../../Utility/GenericMethods/GenericMethods';
import { toastError, toastSuccess } from '../../Utility/Toast/Toast';

export const Home = (props) => {
    //#region objects

    //#endregion objects

    //#region states
    
    //#endregion states 

    //#region functions
    const callingGetApi = (params) => {
        try {
            const baseURL = "https://jsonplaceholder.typicode.com/posts";
            GetService(`${baseURL}/1`)
                .then((response) => {
                    console.log(response.data);
                    toastSuccess("Success")
                })
                .catch((error) => {
                    toastError(error.message)
                })
        } catch (error) {
            console.log(error)
        }
    }

    //#endregion functions


    return (
        <React.Fragment>
            <p>Home Component</p>
        </React.Fragment>
    )
}