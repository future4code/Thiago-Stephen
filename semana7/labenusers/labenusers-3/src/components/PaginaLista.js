import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BotaoDeletar =styled.span`
    color: red;
    cursor: pointer;
`
const axiosConfig = {
    headers: {
        Authorization: "thiago-stephen-mello"
    }
}

class PaginaLista extends React.Component {

    state = {
        
       usuarioLista: []

    };

    componentDidMount() {
      this.pegaLista() 
       
    }

    pegaLista = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", axiosConfig
        )
        .then(resposta => {
           this.setState({ usuarioLista: resposta.data}) 
        })
    }

    deletarUsuario = (idUsuario) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`, axiosConfig).then(() => {
            alert("usuario apagado")
            this.pegaLista()
        }).catch(erro => {
            alert("erro ao apagar")
        })
    }

    render() {
        return(
            
            <ul>
                {this.state.usuarioLista.length === 0 && <div> espere, carregando......</div>}
              {this.state.usuarioLista.map(usuario => {
                  return (
                      <li>{usuario.name}
                          <BotaoDeletar onClick={() => this.deletarUsuario(usuario.id)}>X</BotaoDeletar></li>
                  )
              })}  

            </ul>
        )
    }
}




export default PaginaLista