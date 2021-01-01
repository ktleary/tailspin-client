import React, { useState } from "react";
import Header from "./components/header";
import Story from "./components/story";
import styled from "styled-components";

import "./style/genstar.css";



const GenstarWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.33);
  margin: auto;
  max-width: 444px;
  padding-bottom: 32px;
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
