import React from 'react'
import { CheckBoxComponent } from '../../Utility/UI/CheckBox/CheckBox'
import { TextFieldComponent } from '../../Utility/UI/Textfield/TextField'
export const FormTemplate = (props) => {
    return (
        <React.Fragment>
            <div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <TextFieldComponent
                            id={""}
                            label="Name"
                            name="demo"
                            inputProps={{ maxLength: 12 }}
                            disabled={false}
                            onBlur={(e) => { alert(e.target.value) }}
                        // value=""
                        // onChange={(e) => {alert(e.target.value)}}
                        />
                    </div>
                    <div className='col-lg-4'>
                        <TextFieldComponent
                            id={""}
                            label="Name"
                            name="demo"
                            inputProps={{ maxLength: 12 }}
                            disabled={false}
                        // onBlur={(e) => { alert(e.target.value) }}
                        // value=""
                        // onChange={(e) => {alert(e.target.value)}}
                        />
                    </div>
                    <div className='col-lg-4'>
                        <TextFieldComponent
                            id={""}
                            label="Name"
                            name="demo"
                            inputProps={{ maxLength: 12 }}
                            disabled={false}
                        // onBlur={(e) => { alert(e.target.value) }}
                        // value=""
                        // onChange={(e) => {alert(e.target.value)}}
                        />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-3'>
                    <CheckBoxComponent
                        name="checkBox"
                        value="1"
                        label="Enable"
                    />
                </div>
                <div className='col-lg-3'>
                    <CheckBoxComponent
                        name="checkBox"
                        value="1"
                        label="Disable"
                        checked={true}
                        disabled={true}
                    />
                </div>
            </div>
            
            
        </React.Fragment>
    )
}
