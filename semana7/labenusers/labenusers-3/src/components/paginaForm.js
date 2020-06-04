import React from 'react'
import axios from 'axios'

class PaginaForm extends React.Component {


state = {
    name: '',
    email: '',
}


pegarNome = (event) => {
    const novoNome = event.target.value
    this.setState({ name: novoNome })
}

pegarEmail = (event) => {
    const novoEmail = event.target.value
    this.setState({ email: novoEmail })
}

criarUsuario = () => {
    const axiosConfig = {
        headers: {
            authorization:"thiago-stephen-mello"
        }
    }

    const body ={
        name: this.state.name,
        email: this.state.email
    }

   axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, axiosConfig).then(() => {
    alert("usuario criado com sucesso")
    this.setState({ name: "", email: ""})
   }).catch(() => {
    alert("erro ao criar usuario")
   })
}
    render() {
        return (
        <div>
            <input placeholder='Nome' type='text' value={this.state.name} onChange={this.pegarNome}/>

            <input placeholder='E-mail' type='text' value={this.state.email} onChange={this.pegarEmail}/>

            <button onClick={this.criarUsuario}>Criar Usuario</button>

        </div>

      



        )  
    }
}

export default PaginaForm