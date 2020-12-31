import styled from "styled-components";

const ConflictWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
`;

const ConflictTitle = styled.div`
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-size: 16px;
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
