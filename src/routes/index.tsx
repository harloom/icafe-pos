
import React from 'react';
import {  Route, NavLink, Switch } from 'react-router-dom'
import MenuPage from '../views/page/MenuPage';
import ScanMobilePage from '../views/page/ScanMobilePage';
import TablePage from '../views/page/TablePage';
const MainRoute = () => {
  return (
    <>
    <Switch>
              <Route exact path="/" component={ScanMobilePage}/>
              <Route  path="/menu" component={MenuPage}/>
              <Route  path="/table" component={TablePage}/>
          </Switch>
    </>
  
  )
}

export default MainRoute;



