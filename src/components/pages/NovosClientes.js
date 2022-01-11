import ClientesForm from "../Clientes/ClientesForm";

import styles from "./NovosClientes.module.css";

function NovosClientes() {
  return (
    <div className={styles.novosclientes_container}>
      <h1>Adicionar Usuário</h1>
      <p>Adicione um usuário à nossa biblioteca!</p>
      <ClientesForm btnText="Adicionar Usuário" />
    </div>
  );
}

export default NovosClientes;
