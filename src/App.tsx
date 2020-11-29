import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./assets/css/main.css";
import Navbar from './components/Navbar';
import CartView from './views/CartView';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="w-full flex flex-row">
          <div className="w-full md:w-3/4 ">
          <Navbar/>
          <Switch>
              <Route exact path="/">
                Home
              </Route>
              <Route  path="/menu">
                Menu
              </Route>
              <Route  path="/table">
                Table
              </Route>
          </Switch>
          </div>
            <CartView/>
        </div>
      </Router>
    </div>
  );
}

export default App;
