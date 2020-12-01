import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./assets/css/main.css";
import ButtonIcon from './components/Button/ButtonIcon';
import { ButtonSIze } from './components/Button/Size';
import Navbar from './components/Navbar';
import CartView from './views/CartView';
import { Trash } from "heroicons-react";

function App() {
  const [toogleCart,updateToolge] = React.useState<boolean>(true);

  const handleClickCart = (event : (React.MouseEvent<HTMLButtonElement>))=>{
    updateToolge(!toogleCart);
  }

  return (
    <div className="App">
      <Router>
        <div className="w-full flex flex-row min-w-full">
          <div className={`w-full transform ${toogleCart ? 'lg:w-3/4' : 'lg:w-4/4'}`}>
          <Navbar
            cartOnClik ={handleClickCart}
            countItems ={0}
          />
          <Switch>
              <Route exact path="/">
                <ButtonIcon
                  label={"Small Button"}
                  size={ButtonSIze.Small}
                  icon={<Trash size={14}/>}
                />
              </Route>
              <Route  path="/menu">
                Menu
              </Route>
              <Route  path="/table">
                Table
              </Route>
          </Switch>
          </div>
            <CartView
              isOpen ={toogleCart}
              onClose ={handleClickCart}
            />
        </div>
      </Router>
    </div>
  );
}

export default App;
