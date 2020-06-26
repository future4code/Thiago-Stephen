import React from 'react';
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage';

function AproveOrRejectPage () {
    useProtectedPage()
    const history = useHistory()
    const backToPage = () =>{
        history.push('/SelectPassengerPage')
    }
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
            APROVE OR REJECT PAGE
        </h1>
        <button onClick={backToPage}>VOLTAR</button>
      
      </header>
    </div>
  );
}

export default AproveOrRejectPage;