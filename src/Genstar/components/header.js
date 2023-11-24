import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  color: rgba(255, 255, 255, 0.87);
  padding-top: 16px;
  padding-bottom: 8px;
  margin-bottom: 32px;
  width: 100%;
 
  justify-content: center;
  width: 100%;
  display: flex;
  @media (max-width: 444px) {
    padding-left: 0px;
  }
`;

const Title = styled.h1`
  font-family: OpenSans, sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 2px;
  padding: 0;
  letter-spacing: -1px;
`;

// const Subtitle = styled.div`
//   color: rgba(255, 255, 255, 0.66);
//   font-size: 14px;
//   padding-left: 0px;
// `;

const Header = ({ title }) => (
  <HeaderContainer>
    <Title>Tailspin</Title>
    {/* <Subtitle>Stir the plot.</Subtitle> */}
  </HeaderContainer>
);
export default Header;
