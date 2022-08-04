
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
//        {/* <img src={logo} className="fondo" alt="fondo" />  */}
//         <p> <img src="logo.png" alt="Bienvenido" className='logo'/> 
//         ¡Bienvenido!
//         <img src="waiter.png" className='waiter' />
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//         </p>
        
        
               <form>
                      <input type="email" placeholder='email' /> <button onClick> Inicia </button>
                  </form>
      </header>
      <footer> <button onClick><img src="chef.png" className='chef'  /></button></footer>
    </div>
  );
}

export default App;
