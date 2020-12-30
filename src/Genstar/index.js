import Header from "./components/header";
import styled from "styled-components";
import "./style/genstar.css";

const GenstarWrapper = styled.div`
  border: 1px  solid rgba(255, 255, 255, 0.33);
  margin: auto;
  max-width: 444px;
  width: 100%;
`;

export default function Genstar() {
  const title = "Genstar";
  return (
    <GenstarWrapper>
      <Header title={title} />
    </GenstarWrapper>
  );
}
