import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';



function ListTripPage () {
    const [trips, setTrips] = useState([
      {
          "id": "",
          "durationInDays": 0,
          "name": "",
          "planet": "Marte",
          "description": "",
          "date": ""
      }])

    const history = useHistory()
    const backToPage = () => {
        history.push('/')
    }

    useEffect(() => {
      pullListTravel()
    })

    const pullListTravel = () => {
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/thiago/trips")
      .then(response => {
        setTrips(response.data.trips)
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
            LIST TRIP PAGE
        </h1>
        <div>
          {trips.map(trip => {
            return (
              <ul>
                <li>Viagem: {trip.name}</li>  
                <li>Planeta: {trip.planet}</li>
                <li>Descrição: {trip.description}</li>
                <li>Data: {trip.date}</li>
                <li>Duração Em Dias: {trip.durationInDays}</li>
                <hr />
              </ul>
              
            )
          })}
        </div>
        
      </div>
    </div>
  );
}

export default ListTripPage;