import React from 'react';
import { useHistory}from 'react-router-dom'


function LoginPage () {
    const history = useHistory()
    const backToPage = () => {
        history.replace('/GeneralPage')
    }
    return (
        <div className="App">
        <header className="App-header">
            
            <h1>
                LOGIN PAGE
            </h1>
            <button onClick={backToPage}>VOLTAR</button>
        
        </header>
        </div>
    );
}

export default LoginPage;