import styles from './Sobre.module.css';

function Sobre() {
  return (
    <form>
      <h1 className={styles.quemsomos}>Quem somos</h1>
      <p className={styles.texto}> - Criada em 2021 a ResiliaBook tem como foco facilitar a introdução das pessoas com a literatura 
          a partir do método de feedback.
      </p>
      <h1 className={styles.feedback}>Método Feedback</h1>
      <p className={styles.texto}> - Acreditamos que o feedback seja a melhor forma se evolução contínua no mercado atualmente, 
        e com isso resolvemos implementar isso na ResiliaBook, nosso método é simples e prático. Basta 
        a pessoa preencher seus dados em nosso banco, nós iremos analisar o perfil e enviar um e-mail 
        confirmando o envio do livro (tanto físico quando digital). E, apartir disso se a pessoa nos retornar 
        um feedback em até 3 dias, o livro sairá de graça. Legal não é mesmo ?
      </p>
      <h2 className={styles.conclusao}> - Para mais informações dos nossos criadores acesse o rodapé pelos ícones ou vá até a barra de navegação 
        na aba "Contatos", estamos te esperando para mudar seu jeito de ler o mundo !</h2>
    </form>
  );
}

export default Sobre;
