import React from "react";
import SubmitButton from "../Form/SubmitButton";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./ClientesForm.module.css";

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

function ClientesForm({ btnText }) {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validarCliente) });

  const addCliente = (data) =>
    axios
      .post("http://localhost:3005/clientes", data)
      .then(() => {
        console.log("Seu usuário foi adicionado com sucesso!!");
        history.push("/");
      })
      .catch(() => {
        console.log("Não foi possível inserir seu usuário!!");
      });

  return (
    <div>
      <main>
        <div>
          <form className="form" onSubmit={handleSubmit(addCliente)}>
            <div>
              <label className="label_clientes">Nome_completo</label>
              <input
                type="text"
                name="nome_completo"
                {...register("nome_completo")}
              />
              <p>{errors.nome_completo?.message}</p>
            </div>
            <div>
              <label className="label_clientes">Email</label>
              <input type="text" name="email" {...register("email")} />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <label className="label_clientes">Idade</label>
              <input type="text" name="idade" {...register("idade")} />
              <p>{errors.idade?.message}</p>
            </div>
            <div>
              <label className="label_clientes">CPF</label>
              <input type="text" name="cpf" {...register("cpf")} />
              <p>{errors.cpf?.message}</p>
            </div>
            <div>
              <label className="label_clientes">Endereço</label>
              <input type="text" name="endereço" {...register("endereço")} />
              <p>{errors.endereço?.message}</p>
            </div>
            <div>
              <label className="label_clientes">Telefone</label>
              <input type="text" name="telefone" {...register("telefone")} />
              <p>{errors.telefone?.message}</p>
            </div>
            <div>
              <label className="label_clientes">Genero_preferido</label>
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

export default ClientesForm;
