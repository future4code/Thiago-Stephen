import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PokeCard = (props) => {
    const [pokemom, setPokemom] = useState({})
    
    useEffect(() => {
        pegaPokemom(props.pokeName)
    }, [props.pokeName])

    const pegaPokemom = pokeName => {
        console.log(pokeName)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
            setPokemom(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    
    return (
        <div>
            <p>{pokemom.name}</p>
            <p>{pokemom.weight} Kg</p>
            {pokemom.types && <p>{pokemom.types[0].type.name}</p>}
            {pokemom.sprites && (
                <img src={pokemom.sprites.front_default} alt={pokemom.name} />
            )}
        </div>
    )
}

export default PokeCard