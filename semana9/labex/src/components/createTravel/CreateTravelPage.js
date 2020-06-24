import React from 'react';
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage';

function CreateTravelPage () {
    useProtectedPage()
    const history = useHistory()
    const backToPage = () => {
        history.push('/ListTripPage')
    }
    return (
        <div className="App">
        <header className="App-header">
            
            <h1>
                CREATE TRAVEL PAGE
            </h1>
            <button onClick={backToPage}>VOLTAR</button>
        </header>
        </div>
    );
}

export default CreateTravelPage;