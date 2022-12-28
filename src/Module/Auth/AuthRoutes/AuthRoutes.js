import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom';
import { Login } from '../Login/Login';
import { SignUp } from '../Signup/Signup';

export default function AuthRoutes() {

    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
        </Routes>
    )
}