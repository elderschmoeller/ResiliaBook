import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "../layouts/NavBar.module.css";
import logo from "../../img/Resilia book.svg";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link>
          <img className={styles.imgLogo} src={logo} alt="ResiliaBook" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/clientes">Clientes do mês</Link>
          </li>
          <li className={styles.item}>
            <Link to="/novosclientes">Cadastre-se</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contatos">Contatos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/livros">Livros</Link>
          </li>
          <li className={styles.item}>
            <Link to="/novosLivros">Novos Livros</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
