import React from 'react'
import './CheckBox.css'
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox } from "../../../Components/SharedComponent/ShareComponent";

export const CheckBoxComponent = (props) => {

    return (
        <React.Fragment>
            <FormControlLabel
                className="mb-0 ml-3 mt-1"
                control={
                    <Checkbox
                        name={props?.name}
                        id={props?.id}
                        value={props?.value}
                        checked={props?.checked}
                        disabled={props?.disabled}
                        onChange={props?.onChange}
                    />
                }
                label={props?.label}
            />
        </React.Fragment>
    )
}
CheckBoxComponent.prototype = {
    id: PropTypes.string,
    lable: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
}