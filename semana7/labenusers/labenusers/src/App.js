import React, { Component } from 'react';
import styled from 'styled-components'
import PaginaLista from './components/PaginaLista/PaginaLista'
import PaginaRegistro from './components/PaginaRegistro/PaginaRegistro'
import './App.css';

const AppContainer = styled.div`
`


class App extends Component {
  render() {
    return (
      <AppContainer>
              
        <PaginaRegistro />

        <PaginaLista />
              
           

           
    
    
    
    
    
    
    
    
    
    
    
    
      
      </AppContainer>
    );
  }
}


export default App;
