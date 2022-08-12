// Vista del chef
import React from 'react';
import {Link } from "react-router-dom";


function ViewC() {
  return (
    <div>
    <div className="arrow">
    <p> <img src="logo.png" alt="¡Bienvenidos!" className='logo' /> </p>
      <Link to="/"><img src="back.png" className='back'/></Link>
      <Link to="/"><img src="logOut.png" className='btnLogOut'/></Link>
      </div>
      
        <section className="viewC">
       
    
          
        <div className='pedidos'>
        <button><img src="images/listo.png" className='ok'/></button>
        <button><img src="images/preparando.png" className='ok'/></button>
        <button><img src="images/reloj.png" className='ok'/></button>
        </div>

       </section>
    </div>
  );
}

export default ViewC;
