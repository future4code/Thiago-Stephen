import React from 'react';
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage';
import styled from 'styled-components';
import { useForm } from '../hooks/useForm';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago"

const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid black;
    height: 200px;
    width: 300px;

> form > input {
    margin-top: 10px;
}
`

function CreateTravelPage () {
    const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: ""})

    const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value)
  }


    useProtectedPage()
    const history = useHistory()
    const backToPage = () => {
        history.push('/ListTripPage')
    }
    const handleFormValues = (event) => {
        event.preventDefault()
        createTrip()
        history.push('/ListTripPage')
    }

    const token = localStorage.getItem('token')

    const axiosConfig = {
        headers: {
            auth: token
        }
    }
    

    const createTrip = async () => {
       
        axios.post(`${baseUrl}/trips`, form, axiosConfig)
        .then(response => {
            alert("Viagem Criada Com Sucesso!!!")
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div>
                <button onClick={backToPage}>VOLTAR</button>
                <h1>
                    CREATE TRAVEL PAGE
                </h1>
                <ContainerForm>
                    <form onSubmit={handleFormValues}>
                        
                        <input 
                            value={form.name} 
                            type="text"
                            name="name" 
                            required
                            placeholder="nome" 
                            onChange={handleInputChange}
                        />

                        
                        <input 
                            value={form.planet} 
                            type="text"
                            name="planet"
                            required
                            placeholder="planeta" 
                            onChange={handleInputChange}
                        />

                        
                        <input 
                            value={form.date} 
                            type="date"
                            name="date" 
                            required
                            placeholder="data" 
                            onChange={handleInputChange}
                        />

                        
                        <input 
                            value={form.description} 
                            type="text"
                            name="description" 
                            required
                            placeholder="descrição" 
                            onChange={handleInputChange}
                        />

                        
                        <input 
                            value={form.durationInDays} 
                            type="number"
                            name="durationInDays" 
                            required
                            placeholder="duração" 
                            onChange={handleInputChange}
                        />
                        <button>Enviar</button>

                    </form>

        </ContainerForm>
                
            </div>
        </div>
    );
}

export default CreateTravelPage;