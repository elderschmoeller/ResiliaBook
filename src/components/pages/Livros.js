import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Livros() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3005/livros')
      .then((response) => {
        setBooks(response.data);
      })
      .catch(() => {
        console.log('A requisição deu errado!');
      })
  }, [])

  return (
    books.map(livro => (
      <li id={`livro${+livro.id}`}>
        <h2>Titulo: {livro.titulo}</h2>
        <h3>Autor: {livro.autor}</h3>
        <h3>Editora: {livro.editora}</h3>
        <h3>Gênero: {livro.genero} </h3>
        <h3>Preço: {livro.preco}</h3>
        <div>
          <Link to={{pathname: `/editarlivro/${livro.id}`}}>
            <button type="button">
              Editar
            </button>
          </Link>
        </div>
        <br></br>
      </li>
    )
    )

  )
};

export default Livros;