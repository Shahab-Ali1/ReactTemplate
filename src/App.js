import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Authentication } from './Module/Authentication/Authentication';
import { ToastContainer } from 'react-toastify';


const App = () => {

  return (
    <>
      <Router>
        <ToastContainer/>
        <Authentication />
      </Router>
    </>
  )
};

export default App;
