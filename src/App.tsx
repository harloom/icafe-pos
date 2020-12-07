import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import "./assets/css/main.css";
import BaseRoute from './routes';
import Navbar from './components/Navbar';
import CartView from './views/layout/CartView';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartToogle } from './store/ui/actions';
import { getCart } from './store/cart/actions_cart';

function App() {
  const selectUIToogle = (state : RootState)=> state.ui;
  const ui =  useSelector(selectUIToogle)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(getCart());
  }, [])

  const handleClickCart = (event : (React.MouseEvent<HTMLButtonElement>))=>{
    dispatch(updateCartToogle(!ui.toogleCart));
  }



  return (
    <div className="App">
      {console.log('RENDER PAREENT')}
  
      <Router>
        <div className="w-full flex flex-row min-w-full  min-h-screen bg-gray-200  max-h-screen overflow-y-hidden ">
          <div className={`w-full block transform ${ui.toogleCart ? 'lg:w-3/4' : 'lg:w-4/4'}`}>
          <Navbar
            cartOnClik ={handleClickCart}
            countItems ={0}
          />
          <div className="w-full mt-1.2 ">
          <BaseRoute/>
          </div>
          </div>
            <CartView
              isOpen ={ui.toogleCart}
              onClose ={handleClickCart}
            />
        </div>
      </Router>
    </div>
  );
}

export default App;
