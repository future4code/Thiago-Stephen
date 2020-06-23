import React, {useState, useEffect} from 'react'
import "./App.css";
import axios from "axios"
import PokeCard from "./components/PokeCard"

const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const getPoke = () => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      setPokeList(response.data.results)
    })
    .catch(err => {
      console.log("err")
    })
  }

  useEffect(() => {
    getPoke()

  }, [])

  const changePokeName = event => {
    setPokeName(event.target.value)
  }
  
  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemom => {
          return (
            <option key={pokemom.name} value={pokemom.name}>
              {pokemom.name}
            </option>
          )
          })}
      </select>
      {pokeName && <PokeCard pokeName={pokeName} /> }
    </div>
  );
}

export default App;
