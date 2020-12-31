import styled from "styled-components";

const ConflictWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
`;

const ConflictTitle = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
`;

export default function Conflict({ conflict }) {
  return (
    <ConflictWrapper>
      <ConflictTitle>{conflict}</ConflictTitle>
    </ConflictWrapper>
  );
}
