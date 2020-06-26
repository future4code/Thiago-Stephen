import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage';

function GeneralPage () {
    useProtectedPage()
    const history = useHistory()
    const backToPage = () => {
        history.push('/')
    }
    const historyPush = useHistory()
    const pushToPage = () => {
        historyPush.push('/listTripPage')
    }
    const historyPush1 = useHistory()
    const pushToPage1 = () => {
        historyPush1.push('/PassengerListPage')
    }
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token === null){
            history.push("/homePage")
        }
    }, [history])

    return (
        <div>
            <div>
                <button onClick={backToPage}>VOLTAR</button>
                <h1>
                    GENERAL PAGE
                </h1>
                <div>
                    <button onClick={pushToPage}>Lista privada de Viagens</button>
                    <button onClick={pushToPage1}>Lista passageiros</button>
                </div>
            
            </div>
        </div>
    );
}

export default GeneralPage;