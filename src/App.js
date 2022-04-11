import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import React,{ useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';

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
          <Route path='/login' element={[<Login />]} />
          <Route path='/checkout' element={[<Header />,<Checkout />]} /> 
          <Route path='/payment' element={[<Header />,<Payment />]} />
          <Route path='/' element={[<Header />,<Home />]} /> 
        </Routes>
      </div>    
    </Router>
  );
}

export default App;
