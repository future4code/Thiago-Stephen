import React from 'react';
import { useHistory } from 'react-router-dom'

function TravelDetailsPage () {
    const history = useHistory()
    const backToPage = () => {
        history.push('/ListTripPage')
    }
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
            TRAVEL DETAILS PAGE
        </h1>
        <button onClick={backToPage}>VOLTAR</button>
      </header>
    </div>
  );
}

export default TravelDetailsPage;