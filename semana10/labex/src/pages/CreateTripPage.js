import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToAdminHomePage } from "../routes/coordinator";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

const FullPage = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
`;
const BodyDiv = styled.div`
display: flex;
height: 75vh;
`;
const CreateTripPage = () => {
    useProtectedPage();
    return (
        <FullPage>
            <BodyDiv>
            <h1>Create Trip Page teste</h1>
            </BodyDiv>
        </FullPage>
    
    );
  };
  export default CreateTripPage;
