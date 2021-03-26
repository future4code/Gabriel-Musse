import React from "react";
import styled from "styled-components";

const Body = styled.div`
  background-color: #e3e8eb;
  min-height: 80%;
  display: flex;
  flex-direction: column;
`;

const TextDiv = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 940px;
  margin-left: auto;
  margin-right: auto;
text-align: justify;
`;

export default class Home extends React.Component {
  render() {
    return (
      <Body>
        <TextDiv>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ligula
          risus, egestas vel est eu, finibus dignissim ipsum. Aliquam at mollis
          erat, a porttitor risus. Duis semper mauris eu elit mollis, in
          consectetur ipsum efficitur. Suspendisse fringilla, tortor ut suscipit
          ornare, mi lectus egestas elit, non pellentesque massa lacus ut diam.
          Phasellus rhoncus justo non vehicula sollicitudin. Vivamus at mauris
          id eros cursus porta sit amet sed mauris. Integer ut lacinia ipsum,
          vel vulputate arcu. Sed vel auctor nunc, sed viverra mauris. Sed
          tristique risus non vestibulum ultricies. Ut imperdiet tellus lectus,
          sit amet porta diam sollicitudin mattis. Curabitur posuere, mauris vel
          ultrices sollicitudin, mi dui placerat quam, a dictum eros nulla eget
          nunc. Pellentesque eu imperdiet turpis. Quisque a purus vel massa
          venenatis accumsan. Ut eu justo ut tellus feugiat rutrum vitae vitae
          tellus. Sed non mattis nisl. Suspendisse nec tortor odio. Pellentesque
          venenatis suscipit porttitor. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vivamus bibendum tristique feugiat. Praesent sed turpis ac nulla
          condimentum venenatis vel vitae sem. Vestibulum luctus volutpat elit
          nec consectetur. Curabitur ultrices feugiat nunc at condimentum. Etiam
          consequat nibh hendrerit aliquet finibus.
        </TextDiv>
      </Body>
    );
  }
}
