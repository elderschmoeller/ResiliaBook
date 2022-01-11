import { FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="/contatos">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="/contatos">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <a href="/sobre">
          <span>Resilia Book</span>
        </a>{" "}
        &copy; 2021
      </p>
    </footer>
  );
}

export default Footer;
