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