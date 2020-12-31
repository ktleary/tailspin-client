import styled from "styled-components";

const ThemeWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 16px;
`;

const ThemeTitle = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
`;

export default function Theme({ theme }) {
  return (
    <ThemeWrapper>
      <ThemeTitle>{theme}</ThemeTitle>
    </ThemeWrapper>
  );
}
