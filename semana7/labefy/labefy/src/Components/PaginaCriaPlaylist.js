import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerDiv = styled.div`
    display: flex;
    height: 500px;
    width:350px;
    border: 5px solid orange;
> div > strong {
    text-align: center;
    color: red;
}
`



export class PaginaCriaList extends React.Component{
    render() {
        return(
            <ContainerDiv>
                <div>
                   <strong> Quero Criar Uma Playlist!</strong> 
                   <input ></input>
                </div> 
            </ContainerDiv>
        )
    }
}
export default PaginaCriaList