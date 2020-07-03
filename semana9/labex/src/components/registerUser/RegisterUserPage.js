import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useProtectedPage } from '../hooks/useProtectedPage';
import styled from 'styled-components'
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

export const RegisterUserPage = () => {
  const { form, onChange } = useForm({ name: "", age: "", applicationText: "", profession: "", country: ""})

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value)
  }

  useProtectedPage()
  const history = useHistory()
  const backToPage = () => {
    history.push('/SelectUser')
  }

  const handleFormValues = (event) => {
    event.preventDefault()
    registerUserTrip()
    history.push('/')
  }

  const registerUserTrip = () => {
    axios.post(`${baseUrl}/trips/6IRrmu2HkKJQ0K4ZxJfy/apply`, form)
    .then(response => {
      alert("registrado com sucesso! AGUARDE APROVAÇÃO")
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
            REGISTER USER PAGE
        </h1>
        <ContainerForm>
          <form onSubmit={handleFormValues}>
            
            <input 
              value={form.name}
              name="name" 
              type="text"
              placeHolder="nome" 
              required 
              onChange={handleInputChange}
            />

            
            <input 
              value={form.age}
              name="age"
              type="number"
              placeholder="idade"
              required 
              onChange={handleInputChange}
            />

            
            <input 
              value={form.applicationText}
              name="applicationText"
              type="text"
              placeholder="motivação" 
              required 
              onChange={handleInputChange}
            />

            
            <input 
              value={form.profession}
              name="profession" 
              type="text"
              placeholder="profissão" 
              required 
              onChange={handleInputChange}
            />

            <input 
              value={form.country}
              name="country" 
              type="text"
              placeholder="pais" 
              required 
              onChange={handleInputChange}
            />

            <button>Enviar</button>

          </form>

        </ContainerForm>
        

      </div>
    </div>
  );
}

