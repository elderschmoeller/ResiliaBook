import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './Livros.module.css'

function Livros() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/livros")
      .then((response) => {
        setBooks(response.data);
      })
      .catch(() => {
        console.log("A requisição deu errado!");
      });
  }, []);

  function deletarlivro(id) {
    axios
      .delete(`http://localhost:3005/livros/${id}`)
      .then(() => {
        console.log("Livro apagado com sucesso.");
        setBooks(books.filter((livro) => livro.id !== id));
      })
      .catch(() => {
        console.log("Não foi possível apagar o registro.");
      });
  }

  return books.map((livro) => (
    <form className={styles.form_livros}>
      <li id={`livro${+livro.id}`}>
        <h2>Titulo: {livro.titulo}</h2>
        <h3>Autor: {livro.autor}</h3>
        <h3>Editora: {livro.editora}</h3>
        <h3>Gênero: {livro.genero} </h3>
        <h3>Preço: {livro.preco}</h3>
      </li>
        <div>
          <Link to={{ pathname: `/editarlivro/${livro.id}` }}>
            <button className={styles.btn_livros} type="button">Editar</button>
          </Link>
        </div>
        <div>
          <button className={styles.btn_livros} onClick={() => deletarlivro(livro.id)}>Apagar livro</button>
        </div>
        <br></br>
    </form>
  ));
}

export default Livros;
