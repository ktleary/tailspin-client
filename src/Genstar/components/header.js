import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  color: rgba(255, 255, 255, 1);
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 8px;
  margin-bottom: 32px;
  max-width: 444px;
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
  font-size: 14px;
  padding-left: 0px;
`;

const Header = ({ title }) => (
  <HeaderContainer>
    <Title>Genster</Title>
    <Subtitle>Stir the plot.</Subtitle>
  </HeaderContainer>
);
export default Header;
