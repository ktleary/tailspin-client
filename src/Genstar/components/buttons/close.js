import styled from "styled-components";
import { CloseIcon } from "../buttons/icons";

const ControlsCloseIcon = styled(CloseIcon)`
  height: 24px;
  width: 24px;
`;

const Close = styled.button`
  align-items: center;
  background: rgba(30, 30, 31, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  fill: rgba(255, 255, 255, 0.76);
  height: 32px;
  line-height: 50%;
  outline: 0;
  padding: 0;
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
