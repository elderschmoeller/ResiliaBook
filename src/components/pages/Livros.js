import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Livros() {

  const [books, setBooks] = useState([])

  let history = useHistory();

  function handleClick() {
    history.push("/editarlivro");
  }

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
    <div>
      <ul id='livros' style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {books.map(livro => (
          <li id={`livro${+livro.id}`}>
            <h2>Titulo: {livro.titulo}</h2>
            <h3>Autor: {livro.autor}</h3>
            <h3>Editora: {livro.editora}</h3>
            <h3>Preço: {livro.preco}</h3>
            <div>
              <button type="button" onClick={handleClick}>
                Editar
              </button>
            </div>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Livros;