import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  color: rgba(255, 255, 255, 0.87);
  padding-top: 16px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Subtitle = styled.div`
  color: rgba(255, 255, 255, 0.66);
  font-size: 14px;
  padding-left: 0px;
  letter-spacing: -0.5px;
  font-family: OpenSans, sans-serif;
`;

const subtitle = "Craft Your Tale - Interactive AI Story Generator";

const Header = ({ title }) => (
  <HeaderContainer>
    <Title>Tailspin AI</Title>
    <Subtitle>{subtitle}</Subtitle>
  </HeaderContainer>
);
export default Header;
