
import './App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import { useState } from 'react';
import { Context } from './service/AuthContext';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(setupUser());

  function setupUser(){
    if (localStorage.getItem("token")) {
      return true
    }
    return false
  }
  

  return (
    <Context.Provider value={{
      isAuthenticated,
      setIsAuthenticated
    }}>

      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>

    </Context.Provider>
    
  );
}

export default App;
