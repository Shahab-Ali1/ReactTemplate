import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom';
import { About } from '../Components/About/About';
import { Home } from '../Components/Home/Home';

export default function BasePage() {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}