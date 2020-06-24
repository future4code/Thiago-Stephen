import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage';

export const RegisterUserPage = () => {
  useProtectedPage()
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

