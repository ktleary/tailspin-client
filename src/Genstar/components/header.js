import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  color: rgba(255, 255, 255, 1);
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 32px;
  max-width: 444px;
`;

const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 0px;
  padding: 0;
`;


const Header = ({ title }) => (
  <HeaderContainer>
    <Title>Genster</Title>
  </HeaderContainer>
);

export default Header;
