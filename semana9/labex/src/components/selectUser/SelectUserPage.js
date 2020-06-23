import React from 'react';
import { useHistory } from 'react-router-dom'

function SelectUserPage () {
    const history = useHistory()
    const backToPage = () => {
        history.push('/')
    }
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
            SELECT USER PAGE
        </h1>
        <button onClick={backToPage}>VOLTAR</button>
      </header>
    </div>
  );
}

export default SelectUserPage;