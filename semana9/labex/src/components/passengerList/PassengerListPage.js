import React from 'react';
import { useHistory } from 'react-router-dom'

function PassengerListPage () {
    const history = useHistory()
    const backToPage = () => {
        history.push('/GeneralPage')
    }
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
            PASSENGER LIST PAGE
        </h1>
        <button onClick={backToPage}>VOLTAR</button>
      
      </header>
    </div>
  );
}

export default PassengerListPage;