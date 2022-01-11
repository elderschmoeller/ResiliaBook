import React, { useEffect } from "react";
import SubmitButton from "../Form/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import styles from "./EditarCliente.module.css";

import { useForm } from "react-hook-form";

const validarCliente = yup.object().shape({
  nome_completo: yup.string().required("O campo nome_completo é obrigatório"),
  email: yup.string().required("O campo email é obrigatório"),
  idade: yup.string().required("O campo idade é obrigatório"),
  cpf: yup.string().required("O campo cpf é obrigatório"),
  endereço: yup.string().required("O campo endereço é obrigatório"),
  telefone: yup
    .number()
    .typeError("O campo preço deve ser preenchido com um valor"),
  genero_preferido: yup
    .string()
    .required("O campo genero_preferido é obrigatório"),
});

function EditarCliente() {
  const { id } = useParams();

  let history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3005/clientes/${id}`)
      .then((response) => {
        reset(response.data);
      })
      .catch(() => {
        console.log("A requisição deu errado!");
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validarCliente) });

  const addCliente = (data) =>
    axios
      .put(`http://localhost:3005/clientes/${id}`, data)
      .then(() => {
        console.log("Seu usuário foi inserido com sucesso!!");
        history.push("/");
      })
      .catch(() => {
        console.log("Não foi possível inserir seu usuário!!");
      });

  return (
    <div>
      <main>
        <div>
          <form className={styles.form} onSubmit={handleSubmit(addCliente)}>
            <div>
              <label>Nome_completo</label>
              <input
                type="text"
                name="nome_completo"
                {...register("nome_completo")}
              />
              <p>{errors.nome_completo?.message}</p>
            </div>
            <div>
              <label>Email</label>
              <input type="text" name="email" {...register("email")} />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <label>Idade</label>
              <input type="text" name="idade" {...register("idade")} />
              <p>{errors.idade?.message}</p>
            </div>
            <div>
              <label>CPF</label>
              <input type="text" name="cpf" {...register("cpf")} />
              <p>{errors.cpf?.message}</p>
            </div>
            <div>
              <label>Endereço</label>
              <input type="text" name="endereço" {...register("endereço")} />
              <p>{errors.endereço?.message}</p>
            </div>
            <div>
              <label>Telefone</label>
              <input type="text" name="telefone" {...register("telefone")} />
              <p>{errors.telefone?.message}</p>
            </div>
            <div>
              <label>Genero_preferido</label>
              <input
                type="text"
                name="genero_preferido"
                {...register("genero_preferido")}
              />
              <p>{errors.genero_preferido?.message}</p>
            </div>
            <SubmitButton text="Editar" />
          </form>
        </div>
      </main>
    </div>
  );
}

export default EditarCliente;
