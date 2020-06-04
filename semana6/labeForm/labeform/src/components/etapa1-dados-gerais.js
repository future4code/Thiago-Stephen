import React from 'react';


function Etapa1() {
  return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <h2>1. Qual o seu nome?</h2>
            <input></input>
        <h2>1. Qual a sua idade?</h2>
            <input></input>
        <h2>1. Qual o seu email?</h2>
            <input></input>
        <h2>1. Qual a sua escolaridade?</h2>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
        
     
    </div>
  );
}

export default Etapa1;