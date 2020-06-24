import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage';

function GeneralPage () {
    useProtectedPage()
    const history = useHistory()
    const backToPage = () => {
        history.push('/')
    }
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token === null){
            history.push("/homePage")
        }
    }, [history])

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