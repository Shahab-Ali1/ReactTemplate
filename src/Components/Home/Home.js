import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { addDataRedux } from '../../Redux/Reducer/Example/Example';
import { TextFieldComponent } from '../../Utility/UI/Textfield/TextField';

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
                onChange={(e) => {alert(e.target.value)}}
            />
        </React.Fragment>
    )
}