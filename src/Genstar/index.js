import React from "react";
import Header from "./components/header";
import Story from "./components/story";
import styled from "styled-components";

import "./style/genstar.css";

const GenstarWrapper = styled.div`
  background: rgba(0, 0, 0, 1);
  margin: auto;
  padding-bottom: 0px;
  width: 100%;
`;

export default function Genstar() {
  const title = "Genstr";
  return (
    <GenstarWrapper>
      <Header title={title} />
      <Story />
    </GenstarWrapper>
  );
}
