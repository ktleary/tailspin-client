import styled from "styled-components";

const ThemeWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 16px;
`;

const ThemeTitle = styled.div`
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-size: 24px;
  &:hover{
    color: #64ffda;
  }
`;

export default function Theme(props) {
  const { handleClick, theme } = props;
  return (
    <ThemeWrapper>
      <ThemeTitle name="theme" onClick={handleClick}>
        {theme}
      </ThemeTitle>
    </ThemeWrapper>
  );
}
