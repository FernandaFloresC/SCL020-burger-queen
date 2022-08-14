//Login del Chef
import React from "react";
import { Link } from "react-router-dom";

function LoginC() {
    return (
      <div className="LoginC">
          <p> <img src="logo.png" alt="Bienvenido Chef" className='logo' />
            ¡Bienvenido!
            <img src="chef.png" className='waiter' />
          </p>
  
          <form className='logC'>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' /><button className="log"><Link to="/ViewC">Inicia </Link> </button>
          </form>
        <footer>      
          <button><Link to="/"><img src="back.png" className='back'/></Link></button></footer>
      </div>
    );
  }
  
  export default LoginC;
  