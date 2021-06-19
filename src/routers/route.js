import React, { Suspense, lazy } from 'react'
// import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from '../../src/components/common/Loader';
// import HomePage from '../container/homePage/homePage';
// import About from '../../src/container/About/About';
// import Designer from '../container/Designer/Designer';
// import Service from '../container/Service/Service';
// import ShowRoom from '../container/ShowRoom/ShowRoom';
// import Collection from '../container/Collection/Collection';
// import New from '../container/New/New';

const HomePage = lazy(() => import('../container/homePage/homePage'));
const About = lazy(() => import('../container/About/About'));
const Designer = lazy(() => import('../container/Designer/Designer'));
const Service = lazy(() => import('../container/Service/Service'));
const ShowRoom = lazy(() => import('../container/ShowRoom/ShowRoom'));
const Collection = lazy(() => import('../container/Collection/Collection'));
const New = lazy(() => import('../container/New/New'));

function Routers() {
  return (
    <>
      <Suspense fallback={(<Loader/>)}>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path="/about" exact component={About} />
          <Route path="/designer" exact component={Designer} />
          <Route path="/collection" exact component={Collection} />
          <Route path="/service" exact component={Service} />
          <Route path="/news" exact component={New} />
          <Route path="/showroom" exact component={ShowRoom} />
        </Switch>
      </Suspense>
    </>

  );
}

export default Routers;
