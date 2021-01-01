import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.66);
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 32px;
  max-width: 444px;
`;

const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 32px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 0px;
  padding: 0;
`;

const Subtitle = styled.div`
  font-size: 16px;
  padding-left: 4px;
`;

const Emphasis = styled.span`
  color: #39aca0;
`;

const Header = ({ title }) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <Subtitle>
      Stir the plot.
    </Subtitle>
  </HeaderContainer>
);

export default Header;
