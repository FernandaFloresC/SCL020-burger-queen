// import ReactDOM from 'react-dom/client';
import './App.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './routes/Home.jsx';
import LoginW from './routes/LoginW.jsx';
import LoginC from './routes/LoginC.jsx';
import ViewC from './routes/ViewC.jsx';
import ViewW from './routes/ViewW.jsx';
import State from './routes/State.jsx';


function App() {
  return (

    <div>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/LoginW" element={<LoginW />} />
        <Route exact path="/LoginC" element={<LoginC />} />
        <Route exact path="/ViewC" element={<ViewC />} />
        <Route exact path="/ViewW" element={<ViewW />} />
        <Route exact path="/State" element={<State />} />

      </Routes>
    </div>
  );
}
export default App;