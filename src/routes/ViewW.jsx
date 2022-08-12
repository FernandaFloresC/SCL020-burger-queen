// Vista del Mesero
import React from 'react';
import {Link } from "react-router-dom";
import dataMenu from 'dataMenu.json'

function ViewW() {
  return (
    <div>
  <p> <img src="logo.png" alt="¡Bienvenidos!" className='logo' /> </p>

      <div className="arrow">
      <Link to="/"><img src="back.png" className='back'/></Link>
      <Link to="/"><img src="logOut.png" className='btnLogOut'/></Link>
      </div>
      
    

        <section className="viewW">
          <p>¡Elige la mesa!</p>
       <button className='viewMesa'><img src="mesa.png" className='mesa'/></button>
       <button className='viewMesa'><img src="mesa.png" className='mesa'/></button>
       <button className='viewMesa'><img src="mesa.png" className='mesa'/></button>
       <button className='viewMesa'><img src="mesa.png" className='mesa'/></button>
       <button className='viewMesa'><img src="mesa.png" className='mesa'/></button>
       <button className='viewMesa'><img src="mesa.png" className='mesa'/></button>
       </section>
     <button> <Link to="/state"><img src="images/request.png" className='done'/></Link></button>

       





    </div>
  );
}

export default ViewW;


const dataMenu = (options) => {
  const breakfastType = context.data.filter((elem) => elem.type === options);
  const restOfDayType = context.data.filter((elem) => elem.type === options);
  
  if (breakfastType === 'breakfast') {
    setMenu(breakfastType);
  } else (restOfDayType === 'restOfDay') 
  {
    setMenu(restOfDayType);
  } 
  return dataMenu
};
