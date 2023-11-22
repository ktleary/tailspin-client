import styled from "styled-components";

const ToneWrapper = styled.div`
  background: #212121;
  padding: 0px 16px 16px 18px;
`;

const ToneTitle = styled.div`
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #64ffda;
  }
`;

const Tone = (props) => {
  const { tone, handleClick } = props;
  return (
    <ToneWrapper>
      <ToneTitle name="tone" onClick={handleClick}>
        {tone}
      </ToneTitle>
    </ToneWrapper>
  );
};

export default Tone;
