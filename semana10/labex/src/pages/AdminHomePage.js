import styled from "styled-components";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { BASE_URL } from "../constants/urls";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { goToTripDetailsPage } from "../routes/coordinator";
import { goToCreateTripPage } from "../routes/coordinator";

const FullPage = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const BodyDiv = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 20px;
  min-height: 75vh;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TripContainer = styled.div`
  display: grid;
  justify-self: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  border: 2px solid #4e0259;
  background-image: linear-gradient(to bottom right, white, #4e0259);
  border-radius: 15px;
  height: 280px;
  width: 300px;
  padding: 20px;
  text-shadow: 1px 1px 10px white;
`;

const TripName = styled.h1`
  font-size: 20px;
  margin: 0;
`;

const TripSubTitle = styled.p`
  margin-top: 2px;
  margin-bottom: 0;
`;

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

const AdminHomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const [tripList, setTripList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTripsList = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((response) => {
        setTripList(response.data.trips);
        setLoading(false);
        console.log("response:", response.data);
        console.log("triplist:", tripList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTripsList();
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/login");
  };

  if (tripList.length !== 0 && loading === false) {
    return (
      <FullPage>
        <PageTitle titulo="Trip List" />
        <BodyDiv>
          {tripList.map((trip) => {
            return (
              <TripContainer key={trip.name}>
                <TripName>{trip.name}</TripName>
                <Button
                  onClick={() => goToTripDetailsPage(history, trip.id)}
                  key={trip.name}
                >
                  Check Details
                </Button>
              </TripContainer>
            );
          })}
        </BodyDiv>
        <Button onClick={() => goToCreateTripPage(history)}>Create Trip</Button>
        <Button onClick={logout}>Logout</Button>
      </FullPage>
    );
  } else if (loading === true) {
    return <FullPage>Loading</FullPage>;
  }
};

export default AdminHomePage;
