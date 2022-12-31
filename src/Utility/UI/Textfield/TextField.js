import React from 'react'
import './TextField.css'
import PropTypes from 'prop-types';
import { TextField } from "../../../Components/SharedComponent/ShareComponent";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export const TextFieldComponent = (props) => {

    return (
        <React.Fragment>
            <TextField
                className={""}
                id={props?.id}
                label={props?.label}
                value={props?.value}
                name={props?.name}
                inputProps={props?.inputProps}
                disabled={props?.disabled}
                onChange={props?.onChange}
                onBlur={props?.onBlur}
                variant="outlined"
            />
        </React.Fragment>
    )
}
TextFieldComponent.prototype = {
    id: PropTypes.string,
    lable: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}