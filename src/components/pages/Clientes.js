import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Clientes.module.css";

function Clientes() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/clientes")
      .then((response) => {
        setClients(response.data);
      })
      .catch(() => {
        console.log("A requisição deu errado!");
      });
  }, []);

  function deletarcliente(id) {
    axios
      .delete(`http://localhost:3005/clientes/${id}`)
      .then(() => {
        console.log("Cliente apagado com sucesso.");
        setClients(clients.filter((cliente) => cliente.id !== id));
      })
      .catch(() => {
        console.log("Não foi possível apagar o registro.");
      });
  }

  return clients.map((cliente) => (
    <form className={styles.clientes}>
      <li id={`cliente${+cliente.id}`}>
        <h2>Nome_completo: {cliente.nome_completo}</h2>
        <h3>Email: {cliente.email}</h3>
        <h3>Idade: {cliente.idade}</h3>
        <h3>CPF: {cliente.cpf} </h3>
        <h3>Endereço: {cliente.endereço}</h3>
        <h3>Telefone: {cliente.telefone}</h3>
        <h3>Genero_preferido: {cliente.genero_preferido}</h3>
      </li>
      <div>
        <Link to={{ pathname: `/editarcliente/${cliente.id}` }}>
          <button className={styles.btn_clientes} type="button">
            Editar
          </button>
        </Link>
      </div>
      <div>
        <button
          className={styles.btn_clientes}
          onClick={() => deletarcliente(cliente.id)}
        >
          Apagar cliente
        </button>
      </div>
      <br></br>
    </form>
  ));
}

export default Clientes;
