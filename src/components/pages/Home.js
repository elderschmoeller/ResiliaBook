import React, { useState }from "react";
import styles from "./Home.module.css";
import savings from "../../img/Resilia book.svg";
import LinkButton from "../layouts/LinkButton";
import Loading from "../Loading/Loading"

function Home() {
    const [loading, setLoading] = useState(true);
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Resilia Book</span></h1>
            <p>Dê um start na sua leitura agora mesmo!</p>
            <LinkButton className='btn' to="/novoslivros" text="Adicionar Livro" />
            <img src={savings} alt='ResiliaBook' />
            {loading && <Loading />}
        </section>
    )
}

export default Home;