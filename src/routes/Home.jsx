// Index
import React from 'react';
import {Link } from "react-router-dom";

// import logo from 'public/logo.png'
 


function Home() {
  return (
    <div className="home">
       <p> <img src="logo.png" alt="¡Bienvenidos!" className='logoH' />
        ¡Bienvenido! ✧Inicia sesión por favor✧</p>
         <div className='btnHome'> 
         
          <button><Link to="/loginW"><img src="waiter.png" className='waiter'/> </Link> </button>
          <button><Link to="/loginC"><img src="chef.png" className='chef'/></Link></button>
          </div>
        
    </div>
  );
}

export default Home;
