import styled from "styled-components";
import { CloseIcon } from "../buttons/icons";

const ControlsCloseIcon = styled(CloseIcon)`
  height: 24px;
  width: 24px;
`;

const Close = styled.button`
  background: rgba(30, 30, 31, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  fill: rgba(255, 255, 255, 0.76);
  height: 32px;
  justify-content: center;
  outline: 0;
  width: 32px;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const CloseButton = ({ handleClick, idx }) => (
  <Close onClick={handleClick} id={idx}>
    <ControlsCloseIcon />
  </Close>
);

export default CloseButton;
