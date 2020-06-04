import React from 'react'
import PaginaForm from './components/paginaForm'
import PaginaLista from './components/PaginaLista'

export default class App extends React.Component {
  state = {
    paginaAtual: "cadastrar",
  }
  
  mudarPagina = () => {
    if (this.state.paginaAtual === "cadastrar"){
      this.setState({ paginaAtual: "listaUsuario"})
    } else {
      this.setState({ paginaAtual: "cadastrar"})
    }
  }

  render(){
    return (
      <div>
        <button onClick={this.mudarPagina}>Troca de Tela</button>
        {this.state.paginaAtual === "cadastrar" ? <PaginaForm /> : <PaginaLista />}
      </div>
      




    )
  } 
}
