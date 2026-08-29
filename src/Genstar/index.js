import React from "react";
import Header from "./components/header";
import Story from "./components/story";
import styled from "styled-components";

import "./style/genstar.css";

const GenstarWrapper = styled.div`
  background: #212121;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: auto;
  min-height: 0;
  padding-bottom: 0px;
  width: 100%;
`;

const Shim = styled.div`
  background: #212121;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 16px;
`;

export default function Genstar() {
  const title = "Tailspin AI";
  return (
    <Shim>
      <GenstarWrapper>
        <Header title={title} />
        <Story />
      </GenstarWrapper>
    </Shim>
  );
}
