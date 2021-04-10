import React, {useState, useEffect} from 'react';
import logo from './logo-corebiz-global.svg';
import './App.css';

const useCount = (initial) =>{
  const [clicks, setClicks] = useState(initial);

  const sumaDeClicks = () => {
    setClicks(clicks + 1)
  }

  return {clicks, sumaDeClicks}
}


function ComponenteReutilizable(props) {
  const {clicks, sumaDeClicks} = useCount(5);
  const [poke, setPoke] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() =>{
    //debugger;
    //console.log(`num de click ${clicks}`)
    //document.title = `num de click ${clicks}`;
    obtenerDatos(clicks);

    //console.log("add event")
    //window.addEventListener("click", obtenerDatos(clicks));
  }, [clicks]);

  //diferir con la ejecución de una función
  const obtenerDatos = async(num) =>{
    const datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    const pokemon = await datos.json();
    setPoke(pokemon.species.name);
    setImage(pokemon.sprites.back_default);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {props.nombre? `Hola ${props.nombre}`: "No se ha enviado ningun nombre"}
        </p>
        <a
          className="App-link"
          onClick={sumaDeClicks}
          href="#"
          rel="noopener noreferrer"
        >
          {props.empresa}
        </a>
        <p>No. clicks {clicks}</p>
        <p>Nombre del pokemon {poke}</p>
        <img src={image} />
      </header>
    </div>
  );
}

export default ComponenteReutilizable;
