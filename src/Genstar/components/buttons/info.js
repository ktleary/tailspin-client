/*
<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M220 220h32v116"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 340h88"/><path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"/></svg>
*/

import styled from "styled-components";
import { CloseIcon } from "../buttons/icons";

const ControlsCloseIcon = styled(CloseIcon)`
  height: 24px;
  width: 24px;
`;

const Close = styled.button`
  align-items: center;
  background: #212121;
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
