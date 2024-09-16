import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [, dispatch] = useStateValue(); // Extract dispatch from context

  useEffect(() => {
    // Runs once when the app component loads
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log('THE USER:', authUser);
      if (authUser) {
        // User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, [dispatch]); // Add dispatch as a dependency

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" 
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
              <>
                <Header /> 
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
