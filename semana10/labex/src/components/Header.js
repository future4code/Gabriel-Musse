import { useHistory } from "react-router-dom";
import { goToHomePage } from "../routes/coordinator";
import styled from "styled-components";
import Logo from "../img/logo.png";
import Home from "../img/home.png";
import HomeHover from "../img/homehover.png"

const HeaderDiv = styled.div`
  border-bottom: 1px solid black;
  padding: 10px;
  width: 99%;
  height: 10vh;
  background-color: #e6d4e9;
`;

const HeaderContainer = styled.div`
  width: 60%;
  margin:0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const BotaoHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeImg = styled.img`
  height: 5vh;
  display: inline;
  &:hover {
    cursor: pointer;
  }
  ${BotaoHome}:hover & {
    display: none;
  } ;
`;

const HomeImgHover = styled.img`
  display: none;
  height: 5vh;
  &:hover {
    cursor: pointer;
  }
  ${BotaoHome}:hover & {
    display: inline;
  } ;
`;



const LogoImg = styled.img`
  height: 10vh;
`;

const Header = () => {
  const history = useHistory();
  return (
    <HeaderDiv>
      <HeaderContainer>
        <LogoImg src={Logo}></LogoImg>
          <BotaoHome onClick={() => goToHomePage(history)}>
            <HomeImg src={Home}></HomeImg>
            <HomeImgHover src={HomeHover}></HomeImgHover>
          </BotaoHome>
      </HeaderContainer>
    </HeaderDiv>
  );
};
export default Header;
