import React from 'react';
import { useHistory } from 'react-router-dom'

function GeneralPage () {
    const history = useHistory()
    const backToPage = () => {
        history.push('/')
    }
    return (
        <div className="App">
        <header className="App-header">
            
            <h1>
                GENERAL PAGE
            </h1>
            <button onClick={backToPage}>VOLTAR</button>
        
        </header>
        </div>
    );
}

export default GeneralPage;