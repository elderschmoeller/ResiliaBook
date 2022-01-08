import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Livros(){

    const  [ books, setBooks ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/livros')
        .then((response) => {
            console.log(response.data);
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
              <br></br>
            </li>
          ))}
        </ul>
    </div>
    )
}

export default Livros;