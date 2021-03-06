import React from 'react';
import styled from 'styled-components'
import axios from 'axios'


const ContainerDiv = styled.div`
  display: flex;
  height: 700px;
  width: 800px;
  border: 5px solid orange;
  justify-content: space-evenly;
`

const ListaPlaylist = styled.div`
  border: 2px solid red;
  width: 380px;
`
const BotaoDeleta = styled.span`
  color: red;
  font-size: 15px;
  cursor: pointer;
`
const axiosConfig = {
  headers: {
    Authorization: "thiago-stephen-mello"
  }
};

export class App extends React.Component {
  state = {
    name: " ",
    ListaPlaylist: {
      "result": {
          "quantity": "number",
          "list": [
              {
                  "id": "string",
                  "name": "string"
              }
          ]
      }
  }
  }
  
  componentDidMount = () => {
    
    this.mostraListaPlaylist()
  }
  
  mostraListaPlaylist = () => {
    
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
    .then(response => {
      this.setState({ ListaPlaylist: response.data })
      console.log(response.data)
    })
    .catch(erro => {
      console.log(erro)
    })
  }

  pegaNomeLista = event => {
    const novoNomeValue = event.target.value;
    this.setState({name: novoNomeValue })
  }
  criaPlaylist = () => {
   
    const body = {
      name: this.state.name
    };
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body, axiosConfig)
    .then(() => {
      this.setState({name: ""})
    })
    .catch(erro => {
      console.log(erro)
    })
  }
  detalhePlaylist = (idList) => {
    axios .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idList}/tracks`, axiosConfig)
    .then(() => {
      
      this.mostraListaPlaylist()
      console.log("detalhe")
    })
  }
  apagaPlaylist = (idList) => {
    axios .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idList}`, axiosConfig)
    .then(() => {
      this.mostraListaPlaylist()
    })
  }
 

  render(){
    return(
      <ContainerDiv>
        <section>
          <strong> Quero Criar Uma Playlist!</strong> 
          <p>Nome da Playlist:</p><input type='text' onChange={this.pegaNomeLista}></input>
          <button onClick={this.criaPlaylist}>criar</button>
        </section>
        <ListaPlaylist>
          <h2>Minhas Playlists</h2>
          <ul>
            {this.state.ListaPlaylist.result.list.map(user => {
              return (
                <li>
                  {user.name}
                  <button onClick={() => this.detalhePlaylist(user.name)}>▷</button>
                  <BotaoDeleta onClick={() => this.apagaPlaylist(user.id)}>
                     X 
                  </BotaoDeleta>
                </li>
              )
            })}
            
          </ul>
        </ListaPlaylist>
      </ContainerDiv>
    )
  }
}

export default App;
