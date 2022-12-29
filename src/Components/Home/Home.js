import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { addDataRedux } from '../../Redux/Reducer/Example/Example';

export const Home = (props) => {
    //#region objects
    const dispatch = useDispatch()
    useEffect(() => {
        let arr = [1,2,3,4,5]
        dispatch(addDataRedux(arr))
    }, [])
    
    //#endregion objects

    //#region states
    const {INIT_ARRAY} = useSelector((state) => state.ExampleTesting)
    console.log("store", INIT_ARRAY)
    //#endregion states
    

    return (
        <React.Fragment>
            <p>Home Component</p>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
        </React.Fragment>
    )
}