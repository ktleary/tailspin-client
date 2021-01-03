import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  color: rgba(255, 255, 255, 0.87);
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 8px;
  margin-bottom: 32px;
  width: 100%;
  @media (max-width: 444px) {
    padding-left: 0px;
  }
`;

const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 2px;
  padding: 0;
`;

const Subtitle = styled.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 14px;
  padding-left: 0px;
`;

const Header = ({ title }) => (
  <HeaderContainer>
    <Title>Genstar</Title>
    {/* <Subtitle>Stir the plot.</Subtitle> */}
  </HeaderContainer>
);
export default Header;
