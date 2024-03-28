import { useState } from 'react'
import ourlogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="header">
        <a href="./index.html" class="logo">
          <img src={ourlogo} className="our logo" alt="Busca service logo"></img>
        </a>
        <h1 class="name_logo">BuscaService - Adrian e Deia</h1>
      </div>

      <div class="form-content">
        <form id="cadastro">
          <label for="title" id="Title">Faça seu cadastro abaixo</label>
          <div class="usertype">
            <input type="radio" id="user_type-1" name="user_type" value="prestador" required />
            <label for="user_type-1">Sou Prestador</label>
            <input type="radio" id="user_type-2" name="user_type" value="contratante" required />
            <label for="user_type-2">Sou Contratante</label>
          </div>
          <br></br>
          <label for="firstname">Primeiro Nome:</label>
          <input type="text" id="firstname" />
          <label for="lastname">Sobrenome:</label>
          <input type="text" id="lastname" />
          <label for="telefone">Telefone:</label>
          <input type="tel" id="cellphone" />
          <label for="email">E-mail:</label>
          <input type="email" id="email" />
          <label for="password">Senha:</label>
          <input type="password" id="password" />
          <button type="submit" id="submit" value="Cadastrar-se">Cadastrar-se</button>
        </form>
      </div>

      <p>
        Inscreva-se hoje para começar a faturar!
      </p>

      <div id="form-data"></div>
    </>
  )
}

export default App
