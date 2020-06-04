import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Container = styled.div`
    display: flex;
    height: 400px;
    width:  400px;
    text-align: center;
    color:  darkblue;
    border: 4px dotted blue;
    border-radius: 15px;
 
    > button {
        text-align: center;
    }
`
const TituloAleatorio = styled.h4`
    display: flex;
    text-align: center;
`

export class PaginaAleatoria extends React.Component{

    state ={
        Atividade: {}
    }

    componentDidMount = () => {
        this.gerarAtividade()
    }
    
    gerarAtividade = () => {
        axios.get(`http://www.boredapi.com/api/activity/`).then(response => {
            this.setState ({ Atividade: response.data})
        }).catch(erro => {
            console.log(erro)
        })    
        
    }
        

    render() {
        return (
            <Container>
                <div>
                    
                    <TituloAleatorio>Atividade Aleatória</TituloAleatorio>
                    <button onClick={this.gerarAtividade}>Gerar Atividade</button>
                    <ul>
                        <li>{this.state.Atividade.activity}</li>
                        <li>{this.state.Atividade.accessibility}</li>
                        <li>{this.state.Atividade.type}</li>
                        <li>{this.state.Atividade.participants}</li>
                        <li>{this.state.Atividade.price}</li>
                        <li>{this.state.Atividade.link}</li>
                    </ul>
                </div>
                
            </Container>
        )
    }
}

export default PaginaAleatoria