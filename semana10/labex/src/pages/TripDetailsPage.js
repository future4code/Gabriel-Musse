import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { goToAdminHomePage, goToPreviousPage } from "../routes/coordinator";
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
  flex-direction: column;
  height: 75vh;
`;
const TripDetailsPage = () => {
  useProtectedPage();
  const params = useParams();
  const [trip, setTrip] = useState({});
  const history = useHistory();

  useEffect(() => {
    getTripDetail(params.id);
  }, []);

  const getTripDetail = (id) => {
    const token = window.localStorage.getItem("token");
    axios
      .get(
        `${BASE_URL}/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
        console.log("data trip ", res.data.trip)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FullPage>
      <BodyDiv>
        <h1>GetTripDetail Page</h1>
        <h2>{trip.name}</h2>
        <p>{trip.date}</p>
        <p>{trip.description}</p>
        <button onClick={() => goToPreviousPage(history)}>Back</button>
      </BodyDiv> 
    </FullPage>
  );
};
export default TripDetailsPage;
