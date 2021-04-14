import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinator";

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

const SignUpButton = styled.button`
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
const FiltersDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const SearchFilter = styled.input``;

const SortDiv = styled.select`
  width: 30%;
`;
const TituloFiltro = styled.label`
  font-size: 17px;
  margin-bottom: 7px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const ListTripsPage = () => {
  const history = useHistory();
  const [tripList, setTripList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nameSearch, setNameSearch] = useState("");
  const [sort, setSort] = useState("");

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

  const FilterList = () => {
    return tripList
      .filter((trip) => {
        const tripName = trip.name.toLowerCase();
        const tripDescription = trip.description.toLowerCase();
        const tripPlanet = trip.planet.toLowerCase();
        if (
          tripName.includes(nameSearch.toLowerCase()) ||
          tripDescription.includes(nameSearch.toLowerCase()) ||
          tripPlanet.includes(nameSearch.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      })
      .sort((a, b) => {
        if (sort === "Planet") {
          return a.planet.localeCompare(b.planet);
        } else if (sort === "Duration") {
          return a.durationInDays - b.durationInDays;
        }
      });
  };

  const changeSort = (event) => {
    setSort(event.target.value);
  };

  const changeNameSearch = (event) => {
    setNameSearch(event.target.value);
  };

  let filteredList = FilterList();

  if (tripList.length !== 0 && loading === false) {
    return (
      <FullPage>
        <PageTitle titulo="Trip List" />
        <FiltersDiv>
          <InputDiv>
            <TituloFiltro>Sort by</TituloFiltro>
            <SortDiv onChange={changeSort}>
              <option selected>Select</option>
              <option value={"Planet"}>Planet</option>
              <option value={"Duration"}>Duration</option>
            </SortDiv>
          </InputDiv>
          <InputDiv>
            <TituloFiltro>Search</TituloFiltro>
            <SearchFilter
              onChange={changeNameSearch}
              placeholder="Search by name, description or planet"
            />
          </InputDiv>
        </FiltersDiv>
        <BodyDiv>
          {filteredList.map((trip) => {
            return (
              <TripContainer>
                <TripName>{trip.name}</TripName>
                <TripSubTitle>{trip.description}</TripSubTitle>
                <TripSubTitle>Planet: {trip.planet}</TripSubTitle>
                <TripSubTitle>
                  Duration: {trip.durationInDays} days
                </TripSubTitle>
                <TripSubTitle>Initial date: {trip.date}</TripSubTitle>
              </TripContainer>
            );
          })}
        </BodyDiv>
        <SignUpButton onClick={() => goToApplicationFormPage(history)}>
          Sign up
        </SignUpButton>
      </FullPage>
    );
  } else if (loading === true) {
    return <FullPage>Loading</FullPage>;
  }
};

export default ListTripsPage;
