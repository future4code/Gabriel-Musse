import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";

const FullPage = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
 min-height: 75vh;
`;

const ObsDiv = styled.div`
color: grey;
font-style: italic;
`

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("token", res.data.token);
        goToAdminHomePage(history);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <FullPage>
      <BodyDiv>
        <h1>Login</h1>
        <ObsDiv>email: gabrielmusse@gmail.com.br</ObsDiv>
        <ObsDiv>password: 123456</ObsDiv>
        <input value={email} onChange={handleEmail} placeholder="E-mail" />
        <input value={password} onChange={handlePassword} placeholder="Senha" />
        <button onClick={login}>Fazer login</button>
      </BodyDiv>
    </FullPage>
  );
};
export default LoginPage;
