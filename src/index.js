import React from 'react';
import ReactDOM from 'react-dom'; //acceder al componente DOM
import './index.css';
import ComponenteReutilizable from './beginners/App';
import reportWebVitals from './reportWebVitals';

/*
StrictMode

Verifique que los componentes internos sigan algunas de las prácticas recomendadas y le adviertan si no están en la consola.
Verifique que los métodos obsoletos no se estén utilizando y, si se utilizan, el modo estricto le advertirá en la consola.
Ayudarle a prevenir algunos efectos secundarios identificando riesgos potenciales
*/ 

ReactDOM.render(
  <React.StrictMode>
    <ComponenteReutilizable nombre="Axel" empresa="corebiz"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// si quiere comenzar a medir el rendimiento de su aplicación, pase una función
//por ejemplo: reportWebVitals(console.log))
// es una nueva iniciativa de Google para impulsar la rapidez de carga y la buena experiencia de usuario
reportWebVitals();
