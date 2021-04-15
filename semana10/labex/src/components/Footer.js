import styled from "styled-components";
import Facebook from "../img/facebook.png";
import Twitter from "../img/twitter.png";
import Instagram from "../img/instagram.png";

const FooterDiv = styled.div`
  border-top: 1px solid black;
  width: 100%;
  height: 13vh;
  padding: 1%;
  background-color: #4e0259;
  overflow: hidden;
  margin: 0;
  box-sizing: border-box;
`;

const FooterContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const LeftDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const RightDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SocialDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 50px;
  padding: 5px;
  margin-left: 20px;
  border-radius: 50px;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <FooterContainer>
        <LeftDiv>
          <p>2021 Gabriel Dienstmann Musse ©</p>
          All rights reserved - Labenu
        </LeftDiv>
        <RightDiv>
          <SocialDiv
            onClick={() => window.open("https://facebook.com/", "_blank")}
          >
            <img src={Facebook} alt="facebook" />
          </SocialDiv>
          <SocialDiv
            onClick={() => window.open("https://twitter.com/", "_blank")}
          >
            <img src={Twitter} alt="twitter" />
          </SocialDiv>
          <SocialDiv
            onClick={() => window.open("https://instagram.com/", "_blank")}
          >
            <img src={Instagram} alt="facebook" />
          </SocialDiv>
        </RightDiv>
      </FooterContainer>
    </FooterDiv>
  );
};
export default Footer;
