import { Link } from "react-router-dom";

import Container from "./Container";

import styles from "../layouts/NavBar.module.css";
import logo from "../../img/apple-touch-icon.png";

function NavBar() {
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link>
          <img src={logo} alt="ResiliaBook" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item
          }>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item
          }>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li className={styles.item
          }>
            <Link to="/contatos">Contatos</Link>
          </li>
          <li className={styles.item
          }>
            <Link to="/livros">Livros</Link>
          </li>
          <li className={styles.item
          }>
            <Link to="/novosLivros">Novos Livros</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
