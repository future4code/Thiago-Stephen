import React from 'react'
import styled from 'styled-components'
import './Header.css';
import { useHistory } from 'react-router-dom';



const ContainerHeader = styled.div`
> div {
    height: 150px;
    background: linear-gradient(180deg, #405462 0%, rgba(154, 206, 244, 0) 100%); 
}
`


const Header = () => {

    
    return (
        <ContainerHeader>
            <div>
                <h1 className="LogoHeader">LABE X</h1>
                <h5>Planetary Travel</h5>
            </div>
            <button className="ButtonLogin" >Login</button>
        </ContainerHeader>
    )
}
export default Header