import styled from "styled-components";

const ThemeWrapper = styled.div`
  background: rgba(17, 17, 18, 1);
  padding: 16px 16px 8px 18px;

`;

const ThemeTitle = styled.div`
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  font-size: 32px;
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
