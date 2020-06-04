import React from 'react';
import PaginaAleatoria from "./Components/PaginaAleatoria"

export class App extends React.Component{
  render() {
    return (
      <div>
        <h1>NÃO FIQUE ENTENDIADO. FAÇA ALGO HOJE... :)</h1>
        <p>Escolha Uma Atividade Aleatória, ou Filtre De Acordo Com Seu Interesse! </p>
        <PaginaAleatoria />
      </div>
    )
  }
}

export default App