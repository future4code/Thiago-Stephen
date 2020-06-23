import React from 'react';
import { useHistory } from 'react-router-dom'

function RegisterUserPage () {
  const history = useHistory()
  const backToPage = () => {
    history.push('/SelectUser')
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
            REGISTER USER PAGE
        </h1>
        <button onClick={backToPage}>VOLTAR</button>
      </header>
    </div>
  );
}

export default RegisterUserPage;