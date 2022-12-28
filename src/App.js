import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Authentication } from './Module/Authentication/Authentication';


const App = () => {

  return (
    <>
      <Router>
        <Authentication />
      </Router>
    </>
  )
};

export default App;
