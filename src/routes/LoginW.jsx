// Login del Mesero
import React from 'react';
import { Link } from 'react-router-dom';

  
function LoginW() {
  return (
    <div className="LoginW">
       <p> <img src="logo.png" alt="Bienvenido Chef" className='logo' />
          ¡Bienvenido mesero!
          <img src="waiter.png" className='waiter' />
        </p>
       <form className='logW'>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password'/><button><Link to="/ViewW">Inicia </Link> </button>
          
        </form>
        
      <footer> 
         <button><Link to="/"><img src="back.png" className='back'/></Link></button>
      </footer>
    </div>
  );
}

export default LoginW;
