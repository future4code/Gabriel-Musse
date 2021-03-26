import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div `
  display: block;
  background-color: #fbd094;
  height: 100px;
`
const LeftDiv = styled.div `

`
const RightDiv = styled.div `

`

export default class Footer extends React.Component {

render() {
    return (
        <FooterDiv>
            <LeftDiv></LeftDiv>
            <RightDiv></RightDiv>
        </FooterDiv>

    )
}
}