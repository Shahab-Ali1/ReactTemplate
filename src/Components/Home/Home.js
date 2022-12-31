import React, { useEffect } from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { addDataRedux } from '../../Redux/Reducer/Example/Example';
import { TextFieldComponent } from '../../Utility/UI/Textfield/TextField';
import { GetService, getService } from '../../Utility/GenericMethods/GenericMethods';
import { toastError, toastSuccess } from '../../Utility/Toast/Toast';

export const Home = (props) => {
    //#region objects
    const dispatch = useDispatch()
    useEffect(() => {
        let arr = [1, 2, 3, 4, 5]
        dispatch(addDataRedux(arr))
    }, [])

    //#endregion objects

    //#region states
    const { INIT_ARRAY } = useSelector((state) => state.ExampleTesting)
    console.log("store", INIT_ARRAY)
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
            <TextFieldComponent
                id={""}
                label="Demo"
                name="demo"
                inputProps={{ maxLength: 12 }}
                disabled={false}
                onBlur={(e) => { alert(e.target.value) }}
                // onBlur={callingGetApi}
            // value=""
            // onChange={(e) => {alert(e.target.value)}}
            />
            <br></br>
            <br></br>
            <TextFieldComponent
                id={""}
                label="Demo1"
                name="demo"
                inputProps={{ maxLength: 12 }}
                disabled={false}
                // onBlur={(e) => { alert(e.target.value) }}
                // value=""
                onChange={(e) => { alert(e.target.value) }}
            />
        </React.Fragment>
    )
}