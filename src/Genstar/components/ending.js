import styled from "styled-components";

const EndingWrapper = styled.div`
  background: #212121;
  padding: 0px 16px 16px 18px;
`;

const EndingTitle = styled.div`
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #64ffda;
  }
`;

const Ending = (props) => {
  const { ending, handleClick } = props;
  return (
    <EndingWrapper>
      <EndingTitle name="ending" onClick={handleClick}>
        {ending}
      </EndingTitle>
    </EndingWrapper>
  );
};

export default Ending;
