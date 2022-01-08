import React from 'react'
import SubmitButton from '../Form/SubmitButton';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import styles from "./LivrosForm.js";

import { useForm } from 'react-hook-form'

const validarLivro = yup.object().shape({
  titulo:yup.string().required('O campo título é obrigatório'),
  autor:yup.string().required('O campo autor é obrigatório'),
  genero:yup.string().required('O campo gênero é obrigatório'),
  editora:yup.string().required('O campo editora é obrigatório'),
  preco:yup.number().typeError('O campo preço deve ser preenchido com um valor'),
})

function EditarLivro({btnText}) {

  let history = useHistory()

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validarLivro) });

  const addLivro = data => axios.post('http://localhost:3005/livros', data).then(() => {
    console.log('Seu livro foi adicionado com sucesso!!')
    history.push('/')
  }).catch(() => {
    console.log('Não foi possível inserir seu livro!!')
  });

  return(
    <div>
      <main>
          <div> 
            <form className={styles.form} onSubmit={handleSubmit(addLivro)} > 
              <div>
                <label>Título</label>
                <input type='text' name='titulo' {...register('titulo')}/>
                <p>{errors.titulo?.message}</p>
              </div>
              <div>
                <label>Autor</label>
                <input type='text' name='autor' {...register('autor')}/>
                <p>{errors.autor?.message}</p>
              </div>
              <div>
                <label>Gênero</label>
                <input type='text' name='genero' {...register('genero')}/>
                <p>{errors.genero?.message}</p>
              </div>
              <div>
                <label>Editora</label>
                <input type='text' name='editora' {...register('editora')}/>
                <p>{errors.editora?.message}</p>
              </div>
              <div>
                <label>Preço</label>
                <input type='text' name='preco' {...register('preco')}/>
                <p>{errors.preco?.message}</p>
              </div>
              <SubmitButton text={btnText} />
            </form>
          </div>
      </main>
    </div>
  )
}

export default EditarLivro;