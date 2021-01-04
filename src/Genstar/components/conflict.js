import styled from "styled-components";

const ConflictWrapper = styled.div`
  background: rgba(17, 17, 18, 1);
  padding: 0px 16px 16px 18px;

`;

const ConflictTitle = styled.div`
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  font-size: 24px;
  &:hover{
    color: #64ffda;
  }
`;

export default function Conflict(props) {
  const { conflict, handleClick } = props;
  return (
    <ConflictWrapper>
      <ConflictTitle name="conflict" onClick={handleClick}>{conflict}</ConflictTitle>
    </ConflictWrapper>
  );
}
