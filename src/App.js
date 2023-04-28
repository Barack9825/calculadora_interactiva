import React from 'react';
import './App.css';
import freecodecamplogo from './imagenes/descarga.jfif'

function App() {
  return (
    <div className="App">
      <div  className='freecodecamp-logo-contenedor'>
        <img 
        src={freecodecamplogo}
        className='freecodecamp-logo'
        alt='logo de freecodeCamp'
      />

      </div>
    </div>
  );
}

export default App;
