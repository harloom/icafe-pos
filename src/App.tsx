import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import "./assets/css/main.css";
import BaseRoute from './routes';
import Navbar from './components/Navbar';
import CartView from './views/layout/CartView';

function App() {
  const [toogleCart,updateToolge] = React.useState<boolean>(true);

  const handleClickCart = (event : (React.MouseEvent<HTMLButtonElement>))=>{
    updateToolge(!toogleCart);
  }

  return (
    <div className="App">
      <Router>
        <div className="w-full flex flex-row min-w-full  min-h-screen bg-gray-200  max-h-screen overflow-y-hidden">
          <div className={`w-full block transform ${toogleCart ? 'lg:w-3/4' : 'lg:w-4/4'}`}>
          <Navbar
            cartOnClik ={handleClickCart}
            countItems ={0}
          />
          <div className="w-full mt-1.2 ">
          <BaseRoute/>
          </div>
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
