import "../../App.css";
import React from "react"
import { useState } from "react";
import ourlogo from "../../assets/logo.png";
import Navbar from "../../components/navbar/navigationbar"

function SignUp() {
  const [formData, setFormData] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    setFormData(formObject);
  };

  return (
    <>
      <div className="header">
        <a className="logo">
          <img src={ourlogo} className="our logo" alt="Busca service logo" />
        </a>
        <Navbar />
        <h1 className="name_logo">BuscaService - Adrian e Deia</h1>
      </div>

      <div className="form-content">
        <form id="cadastro" onSubmit={handleFormSubmit}>
          <label for="title" id="Title">Faça seu cadastro abaixo</label>
          <div className="usertype">
            <input type="radio" id="user_type-1" name="user_type" value="prestador" required />
            <label for="user_type-1">Sou Prestador</label>
            <input type="radio" id="user_type-2" name="user_type" value="contratante" required />
            <label for="user_type-2">Sou Contratante</label>
          </div>
          <br></br>
          <label for="firstname">Primeiro Nome:</label>
          <input name="firstname" type="text" id="firstname" />
          <label for="lastname">Sobrenome:</label>
          <input name="lastname" type="text" id="lastname" />
          <label for="telefone">Telefone:</label>
          <input name="telefone" type="tel" id="cellphone" />
          <label for="email">E-mail:</label>
          <input name="email" type="email" id="email" />
          <label for="password">Senha:</label>
          <input name="password" type="password" id="password" />
          <button type="submit" id="submit" value="Cadastrar-se">
            Cadastrar-se
          </button>
        </form>
      </div>

      <p>
        Inscreva-se hoje para começar a faturar!
      </p>

      <div id="form-data">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </>
  );
}

export default SignUp