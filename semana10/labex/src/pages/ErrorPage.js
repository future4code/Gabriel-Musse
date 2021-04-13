import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const FullPage = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;

`;
const BodyDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 75vh;
`;

const ErrorPage = () => {
  const history = useHistory();
  return (
    <FullPage>
    <BodyDiv>
    <p>Erro 404 - Essa página não existe!</p>
      <button onClick={history.goBack}>Voltar</button>
    </BodyDiv>
</FullPage>
     
  );
};

export default ErrorPage;
