import styled from "styled-components";
import { Link } from "react-router-dom";

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
    return (
        <FullPage>
            <BodyDiv>
            "CreateTripPage teste"
            </BodyDiv>
        </FullPage>
    
    );
  };
  export default CreateTripPage;
