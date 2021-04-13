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
const TripDetailsPage = () => {
    return (
        <FullPage>
            <BodyDiv>
            "TripDetailsPage teste"
            </BodyDiv>
        </FullPage>
    
    );
  };
  export default TripDetailsPage;
  