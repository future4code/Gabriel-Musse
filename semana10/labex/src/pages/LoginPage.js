import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import React, { useState } from "react";
import axios from "axios";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";
const FullPage = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 75vh;
`;


const ObsDiv = styled.div`
  color: grey;
  font-style: italic;
`;

const Input = styled.input`
width: 50%;
margin-top: 20px;
`

const Button = styled.button`
  min-width: 10%;
  padding: 10px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 20px;

  text-transform: uppercase;
  border: 3px solid #4e0259;
  border-radius: 7px;
  background-color: white;
  color: #4e0259;
  &:hover {
    background-color: #4e0259;
    color: white;
    transition: 150ms;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

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
        <PageTitle titulo="Login" />
        <ObsDiv>email: gabrielmusse@gmail.com.br</ObsDiv>
        <ObsDiv>password: 123456</ObsDiv>
        <Input value={email} onChange={handleEmail} placeholder="E-mail" />
        <Input value={password} onChange={handlePassword} placeholder="Senha" />
        <Button onClick={login}>Login</Button>
      </BodyDiv>
    </FullPage>
  );
};
export default LoginPage;
