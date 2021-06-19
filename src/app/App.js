import React, { Suspense, lazy } from 'react';
// import Routes from '../routers/route';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from '../components/common/Loader';
import { useSelector } from 'react-redux';
import Routers from '../routers/route';


function App(props) {
  return (
    <>
      <Router>
        <Routers />
      </Router>
    </>

  );
}

export default App;
