import styled from "styled-components";
import { CloseIcon } from "../buttons/icons";

const ControlsCloseIcon = styled(CloseIcon)`
  height: 24px;
  width: 24px;
`;

const Close = styled.button`
  align-items: center;
  background: #2b2b2b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  fill: rgba(255, 255, 255, 0.76);
  height: 32px;
  outline: 0;
  padding: 2px;
  text-align: center;
  width: 32px;
  &:hover {
    color: rgba(255, 255, 255, 0.87);
  }
`;

const CloseButton = ({ handleClick, idx }) => (
  <Close onClick={handleClick} id={idx}>
    <ControlsCloseIcon />
  </Close>
);

export default CloseButton;
