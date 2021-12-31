import React, { Component } from 'react';
import api from './api.js';
import Button from './botao.js'

class App extends Component {

  state = {
    func: [],
  }

  async componentDidMount() {
    const response = await api.get('/clientes');
    this.setState({ func: response.data })
  }

  render() {

    const { func } = this.state;

    return (
      <div>
        <h1>
          Busca funcionários
        </h1>
        <Button text="Aparecer" />
        <ul id='funcionarios' style={{listStyleType: 'none', margin: 0, padding: 0}}>
          {func.map(funcionario => (
            <li id={`funcionario${+funcionario.id}`}>
              <h2>Nome: {funcionario.nome_completo}</h2>
              <h3>E-mail: {funcionario.email}</h3>
              <h3>Endereço: {funcionario.endereco}</h3>
              <h3>Idade: {funcionario.idade}</h3>
          </li>
          ))}
        </ul>
      </div>
    );
  };
};



export default App;