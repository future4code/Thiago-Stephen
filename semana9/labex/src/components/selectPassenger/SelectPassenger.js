import React from 'react';
import { useHistory } from 'react-router-dom'

function SelectPassengerPage () {
    const history = useHistory()
    const backToPage = () => {
        history.push('/PassengerListPage')
    }
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
            SELECT PASSENGER PAGE
        </h1>
        <button onClick={backToPage}>VOLTAR</button>
      
      </header>
    </div>
  );
}

export default SelectPassengerPage;