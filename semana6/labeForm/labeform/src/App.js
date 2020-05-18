import React from 'react';
import Etapa1 from './components/etapa1-dados-gerais';
import Etapa2 from './components/etapa2-info-n-tem-superior';
import Etapa3 from './components/etapa3-info-tem-superior';
import Agra from './components/agradecimentos'
import Agradecimento from './components/agradecimentos';

export class App extends React.Component {
  let renderizaEtapa
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;      
        case 2:
          return <Etapa2 />          
        case 3:
          return <Etapa3 />      
        case 4:
          return <Agradecimento />          
      
        default:
          break;
      }

  render () {  
    return (
      state = {
        etapa: 1,
      }
      
      <div>
        {this.renderizaEtapa()}

        <button onclick>Próxima etapa</button>
      </div>
    );
  }
}

  export default App;
