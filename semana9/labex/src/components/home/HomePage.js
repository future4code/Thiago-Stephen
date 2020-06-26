import React from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom'
import Foguete from "../image/Foguete.png"

function HomePage () {
    const history = useHistory()
  return (
    <div>
      <div>
        <h1>
            HOME PAGE
        </h1>
        <img className="ImagemFoguete" src={Foguete} />
        <button>Lista de Viagens</button>
      </div>
    </div>
  );
}

export default HomePage;