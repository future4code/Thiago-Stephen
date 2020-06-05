import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const PaginaLista = (props) => {
    const {lista} = props
    return(
        <div>
            <h1> Minhas Playlists</h1>
            <ul>
              {lista.map(playlist => {
                return (
                  <li key={playlist.}>
                    {playlist.name}
                  </li>
                )
              })}
          </ul>
        </div>
    )
}






export default PaginaLista