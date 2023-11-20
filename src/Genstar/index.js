import React from "react";
import Header from "./components/header";
import Story from "./components/story";
import styled from "styled-components";

import "./style/genstar.css";

const GenstarWrapper = styled.div`
  background: #212121;
  margin: auto;
  padding-bottom: 0px;
  width: 100%;
`;

const Shim = styled.div`
  background: #212121;
  padding: 0 16px;
`;

export default function Genstar() {
  const title = "Genstr";
  return (
    <Shim>
      <GenstarWrapper>
        <Header title={title} />
        <Story />
      </GenstarWrapper>
    </Shim>
  );
}
