import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import BasePage from './BasePage/BasePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './GeneralComponent/Layout/Layout';
import { Authentication } from './Module/Authentication/Authentication';


const App = () => {

  return (
    <>
      <Router>
        {/* <Layout> <BasePage /></Layout> */}
        <Authentication />
      </Router>
    </>
  )
};

export default App;
