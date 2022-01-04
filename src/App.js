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
          Busca clientes
        </h1>
        <Button text="Aparecer" />
        <ul id='clientes' style={{listStyleType: 'none', margin: 0, padding: 0}}>
          {func.map(cliente => (
            <li id={`cliente${+cliente.id}`}>
              <h2>Nome: {cliente.nome_completo}</h2>
              <h3>E-mail: {cliente.email}</h3>
              <h3>Endereço: {cliente.endereco}</h3>
              <h3>Idade: {cliente.idade}</h3>
          </li>
          ))}
        </ul>
      </div>
    );
  };
};



export default App;