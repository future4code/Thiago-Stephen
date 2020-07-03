import React, { useState, useEffect }from 'react';
import styled from 'styled-components'
import { useHistory}from 'react-router-dom'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago"

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
    border: 1px solid black;
> button {
    margin-top: 20px;
    height: 30px;
    width: 100px;
}
`

function LoginPage () {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()
    const backToPage = () => {
        history.replace('/GeneralPage')
    }

    const handleUpDateEmail = (event) => {
       setEmail(event.target.value)
    }
    const handleUpDatePassword = (event) => {
        setPassword(event.target.value)
    }
    const login = async () => {
        const loginBody = {
            email: email,
            password: password
        }
        try {
        const response = await axios.post(`${baseUrl}/login`, loginBody)
        window.localStorage.setItem("token", response.data.token)
        alert("você esta logado")
        history.push('/GeneralPage')
        } catch (error) {
            console.log(error)
            alert("algo não deu certo")
        }
    }

    return (
        <div>
            <header>
                <h1>
                    LOGIN PAGE
                </h1>
                <button onClick={backToPage}>VOLTAR</button>
            </header>
            <FormContainer>
                <input className="LoginInput" value={email} onChange={handleUpDateEmail} />
                <input className="LoginInput" value={password} onChange={handleUpDatePassword} />
                <button onClick={login}>ENTRAR</button>
            </FormContainer>
        </div>
    );
}

export default LoginPage;