import LivrosForm from "../Livros/LivrosForm";

import styles from "./NovosLivros.module.css";

function NovosLivros() {
  return (
    <div className={styles.novoslivros_container}>
      <h1>Adicionar Livros</h1>
      <p>Adicione um Livro à nossa biblioteca!</p>
      <LivrosForm btnText="Adicionar Livro" />
    </div>
  );
}

export default NovosLivros;
