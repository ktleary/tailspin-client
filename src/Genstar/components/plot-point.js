import styled from "styled-components";

const PlotPointWrapper = styled.div`
  background: #212121;
  padding: 0px 16px 16px 18px;
`;

const PlotPointTitle = styled.div`
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #64ffda;
  }
`;

const PlotPoint = (props) => {
  const { plotPoint, handleClick } = props;
  return (
    <PlotPointWrapper>
      <PlotPointTitle name="plotPoint" onClick={handleClick}>
        {plotPoint}
      </PlotPointTitle>
    </PlotPointWrapper>
  );
};

export default PlotPoint;
