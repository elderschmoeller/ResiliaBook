import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Contatos.module.css';

function Contatos(){
    return (
    <form className={styles.contatos_form}>
        <p>Informações de contatos dos integrantes! </p>
        <h1>Elder Schmoeller :<br></br> <a href="https://github.com/elderschmoeller">Github <FaGithub /></a> <br></br> <a href="https://www.linkedin.com/in/elderschmoeller/">Linkedin <FaLinkedin /></a></h1>
        <h1>Bianca Padilha :<br></br> <a href="https://github.com/Padilha27">Github <FaGithub /></a> <br></br> <a href="https://www.linkedin.com/in/bianca-padilha-070772174/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAClnWNQBcrgZJR-VoLr7OhjIRFX1H5U3v4A">Linkedin <FaLinkedin /></a></h1>
        <h1>Daniel Duarte :<br></br> <a href="https://github.com/danielduartee">Github <FaGithub /></a> <br></br> <a href="https://www.linkedin.com/in/daniel-duarte-29a164204/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADP-DpYBSo90qronVJqgtMfvXkUoccAynbE">Linkedin <FaLinkedin /></a></h1>
        <h1>Sophia Blazizza :<br></br> <a href="https://github.com/sophiablazizza">Github <FaGithub /></a> <br></br> <a href="https://www.linkedin.com/in/sophiablazizza/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACWpmvgB4WlvW2Kwt9GZff1Jazzbny6CRkc">Linkedin <FaLinkedin /></a></h1>
        <h1>Vitor Germano :<br></br> <a href="https://github.com/vitorrgermano">Github <FaGithub /></a> <br></br> <a href="https://www.linkedin.com/in/vitorrgermano/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABhrn-ABQ0kFExrKs2fRngv294yPGGRap9o">Linkedin <FaLinkedin /></a></h1>
    </form>
    ) 
}

export default Contatos