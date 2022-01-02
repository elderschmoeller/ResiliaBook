import React from 'react';
//import api from './api.js';
//import Button from './botao.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddLivro } from './components/Livros/AddLivro.js';
import { EditLivro } from './components/Livros/EditLivro.js';
import { ListLivro } from './components/Livros/ListLivros.js';

function App() {
  return (
    <div>
        <h1>Nav</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/AddLivro' element={<AddLivro />}/>
          <Route path='/EditLivro' element={<EditLivro />}/>
          <Route path='/ListaLivros' element={<ListLivro />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

/*

{component}
  state = {
    func: [],
  }

  async componentDidMount() {
    const response = await api.get('/clientes');
    this.setState({ func: response.data })
  }
class App extends Component {

//const { func } = this.state;

*/


/*  


      <h1>
          Livros
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
        
*/ 