import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import React,{ useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment';
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51KnH2KSI4o76Qx4p8zoUe9VP68GxMOnzBmsrhyma6n1SEM4OqryjiA6NATzfe4ZVBLF2LZ0tTsgN89heAGwUXDex00qwm6U89o"
);

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>',authUser);
      if(authUser) {
        //User logged in
        dispatch({
          type: 'SET_USER',
          user : authUser
        })
      } else {
        //User logged out
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/orders' element={[<Header />,<Orders />]} />
          <Route path='/login' element={[<Login />]} />
          <Route path='/checkout' element={[<Header />,<Checkout />]} /> 
          <Route path='/payment' element={[<Header />,<Elements stripe={promise}><Payment /></Elements>]} />
          <Route path='/' element={[<Header />,<Home />]} /> 
        </Routes>
      </div>    
    </Router>
  );
}

export default App;
