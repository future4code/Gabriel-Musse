import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const UsersDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-bottom: 1px solid grey;
  margin: 10px;
  
`;


const UserImg = styled.img`
  height: 50px;
  width: 50px;
  margin: 5px;
  border-radius: 100%;
`;

const FullPage = styled.div`
 overflow-y: scroll;
 background-image: linear-gradient(#00e5d5, #00b3e7);
height: 100%;
border-top: none;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;

`;


const Users = () => {
  const [matchList, setMatchList] = useState([]);

  const pegarMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabrielmussecruz/matches "
      )
      .then((response) => {
        setMatchList(response.data.matches);
        console.log("response:", response.data.matches)
        console.log("matchlist:", matchList)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegarMatches();
  }, []);


  return (
    <FullPage>
       {matchList.map((user) => {
          return (
            <UsersDiv>
            <UserImg src={user.photo}></UserImg>
            {user.name} , {user.age}

          </UsersDiv>
          );
        })}

    </FullPage>
  );
};
export default Users;
