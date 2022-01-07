import styles from './Home.module.css'
import savings from '../../img/Resilia book.svg'
import LinkButton from '../layouts/LinkButton'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Resilia Book</span></h1>
            <p>Dê um start na sua leitura agora mesmo!</p>
            <LinkButton to="/novolivro" text="Adicionar Livro" />
            <img src={savings} alt='ResiliaBook'/>
        </section>
    )
}

export default Home