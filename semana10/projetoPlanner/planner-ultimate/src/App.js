import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import styled from "styled-components"

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-thiago"

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`

function App() {
  const [ task, setTask ] = useState("")
  const [ day, setDay ] = useState("")
  const [ listTasks, setListTasks] = useState([])


  

  const fetchTasksList = () => {
    Axios
    .get(`${baseUrl}`)
    .then(response => {
      setListTasks(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetchTasksList()
  }, [])

  const handleCreateTask = () => {
    const body = {
      text: task,
      day: day
    }

    Axios
    .post(`${baseUrl}`, body)
    .then(() => {
      fetchTasksList()
      alert("tarefa criada")
    })
    .catch(error => {
      console.log(error)
      alert("erro ao criar tarefa")
    })
  }

  const deleteTask = async (taskId) => {
    Axios
    .delete(`${baseUrl}/${taskId}`)
    .then(() => {
      fetchTasksList()
      alert("tarefa apagada")
    })
    .catch(error => {
      alert("erro ao apagar a tarefa")
    })
  }

  const handleTask = (event) => {
    setTask(event.target.value)
  }

  const handleDay = (event) => {
    setDay(event.target.value)
  }



  

  return (
    <div className="App">
      <div className="FlexContainer">
        <div className="Segunda">
          SEGUNDA 
          <hr />
            {listTasks.map(task => {
              if (task.day === "segunda") {
              return (
                <ul>
                  <li className="ItemTarefa">tarefa{task.text} - {task.day}</li> <DeleteButton onClick={()=>{deleteTask(task.id)}}>x</DeleteButton>
                </ul>
              )
              }
            })}
            
        </div>
        <div className="Terca">
          TERÇA 
          <hr />
          {listTasks.map(task => {
            if (task.day === "terca") {
              return (
                <ul>
                  <li className="ItemTarefa">tarefa{task.text} - {task.day}</li> <DeleteButton onClick={()=>{deleteTask(task.id)}}>x</DeleteButton>
                </ul>
              )
            }
          })}
          
           </div>
        <div className="Quarta">
          QUARTA 
          <hr />
          {listTasks.map(task => {
            if (task.day === "quarta") {
              return (
                <ul>
                  <li className="ItemTarefa">tarefa{task.text} - {task.day}</li> <DeleteButton onClick={()=>{deleteTask(task.id)}}>x</DeleteButton>
                </ul>
              )
            }
          })}
                        </div>
        <div className="Quinta">
          QUINTA 
          <hr />
          {listTasks.map(task => {
            if (task.day === "quinta") {
              return (
                <ul>
                  <li className="ItemTarefa">tarefa{task.text} - {task.day}</li> <DeleteButton onClick={()=>{deleteTask(task.id)}}>x</DeleteButton>
                </ul>
              )
            }
            })}
                         </div>
        <div className="Sexta">
          SEXTA 
          <hr />
          {listTasks.map(task => {
            if (task.day === "sexta") {
              return (
                <ul>
                  <li className="ItemTarefa">tarefa{task.text} - {task.day}</li> <DeleteButton onClick={()=>{deleteTask(task.id)}}>x</DeleteButton>
                </ul>
              )
            }
            })}
          
          </div>
        <div className="Sabado">
          SABADO 
          <hr />
          {listTasks.map(task => {
            if (task.day === "sabado") {
              return (
                <ul>
                  <li className="ItemTarefa">tarefa{task.text} - {task.day}</li> <DeleteButton onClick={()=>{deleteTask(task.id)}}>x</DeleteButton>
                </ul>
              )
            }
          })}
                        </div>
        <div className="Domingo">
          DOMINGO 
          <hr />
          {listTasks.map(task => {
            if (task.day === "domingo") {
              return (
                <ul>
                  <li className="ItemTarefa">tarefa{task.text} - {task.day}</li> <DeleteButton onClick={()=>{deleteTask(task.id)}}>x</DeleteButton>
                </ul>
              )
            }
          })}
                        </div>
      </div>
      <div className="CriaTarefa">
        
          <input 
            value={task}
            type="text" 
            placeholder="Digite uma tarefa"
            name="text"
            onChange={handleTask} 
          />
          <select onChange={handleDay} name="day">
            <option value="segunda">Segunda</option>
            <option value="terca">Terça</option>
            <option value="quarta">Quarta</option>
            <option value="quinta">Quinta</option>
            <option value="sexta">Sexta</option>
            <option value="sabado">Sabado</option>
            <option value="domingo">Domingo</option>
          </select>
          <button onClick={handleCreateTask}>Criar Tarefa</button>
        
        
      </div>
    </div>
  );
}

export default App;
