import React from 'react';
import './App.css';
import freecodecamplogo from './imagenes/descarga.jfif';
import Boton from './componentes/Boton';
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
      <div className='contenedor-calculadora'>
      <div className='fila'>
        <Boton>1</Boton>
        <Boton>+</Boton>
      </div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
     </div>
    </div>
  );
}

export default App;
