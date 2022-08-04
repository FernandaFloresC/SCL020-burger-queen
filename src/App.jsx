// import ReactDOM from 'react-dom/client';

import React from 'react';
import './App.css';
import { Router, Route, Link} from "react-router-dom";

import index from './routes/index';
import loginChefOne from './routes/loginChefOne';
import loginWaiterUno from './routes/loginWaiterUno';
import viewChefTwo from './routes/loginWaiterUno';
import viewWaiterDos from './routes/viewWaiterDos';


function App() {
  return (
    <Router>
    <div className="App">
     
    <nav>
          <ul>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/loginChefOne">loginChefOne</Link>
            </li>
            <li>
              <Link to="/loginWaiterUno">loginWaiterUno</Link>
            </li>
            <li>
              <Link to="/viewChefTwo">viewChefTwo</Link>
            </li>
            <li>
              <Link to="/viewWaiterDos">viewWaiterDosw</Link>
            </li>
          </ul>
        </nav>

      <Route exact path="/index" component={index} />
      <Route exact path="/loginChefOne" component={loginChefOne} />
	    <Route exact path="/loginWaiterUno" component={loginWaiterUno} />
      <Route exact path="/viewChefTwo" component={viewChefTwo} />
      <Route exact path="/viewWaiterDos" component={viewWaiterDos} />
      
       
       
       
    </div>
    </Router>
  );
}

export default App;
