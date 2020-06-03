import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BotaoDeletar =styled.span`
    color: red;
    cursor: pointer;
`

class PaginaLista extends React.Component {

    state = {
        
       usuarioLista: []

    };

    componentDidMount() {
        const axiosConfig = {
            headers: {
                Authorization: "thiago-stephen-mello"
            }
        }
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", axiosConfig
        )
        .then(resposta => {
           this.setState({ usuarioLista: resposta.data}) 
        })
    }

    render() {
        return(
            
            <ul>
                {this.state.usuarioLista.length === 0 && <div> espere, carregando......</div>}
              {this.state.usuarioLista.map(usuario => {
                  return (
                      <li>{usuario.name}<BotaoDeletar>X</BotaoDeletar></li>
                  )
              })}  

            </ul>
        )
    }
}




export default PaginaLista