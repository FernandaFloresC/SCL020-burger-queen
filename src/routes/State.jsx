// Vista del estado
import React from 'react';
import {Link } from "react-router-dom";


function State() {
  return (
    <div>
    <div className="">
      <Link to="/"><img src="back.png" className='back'/></Link>
      <Link to="/"><img src="logOut.png" className='btnLogOut'/></Link>
      </div>
      
        <section className="state">
        <p> <img src="logo.png" alt="¡Bienvenidos!" className='logo' /> </p>
    
          <div className='estados'>
        <button><Link to="/"><img src="images/listo.png" className='ok'/></Link></button>
        <button><Link to="/"><img src="images/preparando.png" className='ok'/></Link></button>
        <button><Link to="/"><img src="images/reloj.png" className='ok'/></Link></button>
        </div>

       </section>
    </div>
  );
}

export default State;
