import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';


import styles from "./LivrosForm.module.css";

function LivrosForm({btnText}) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Seu Nome Completo:"
        name="name"
        placeholder="Insira o seu Nome"
      />
      <Input
        type="text"
        text="Nome do Livro:"
        name="name"
        placeholder="Insira o Nome do Livro"
      />
      <Input
        type="number"
        text="Valor do Livro:"
        name="name"
        placeholder="Insira o valor do Livro"
      />
      <Select 
      name="category_id" 
      text="Selecione o Gênero do Livro:" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default LivrosForm;
