import React, { memo } from "react";
import styled from "styled-components";
import {
  AddIcon,
  AddLocationIcon,
  FamilyIcon,
  PersonIcon,
  ReloadIcon,
  SendIcon,
} from "./buttons/icons";

const ControlsWrapper = styled.div`
  align-items: center;
  background: #212121;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 8px 8px;
`;

const ControlsReloadIcon = styled(ReloadIcon)`
  height: 24px;
  width: 24px;
`;

const ControlsAddIcon = styled(AddIcon)`
  height: 12px;
  margin-left: -2px;
  width: 12px;
`;
const ControlsPersonIcon = styled(PersonIcon)`
  height: 24px;
  width: 24px;
`;
const ControlsLocationIcon = styled(AddLocationIcon)`
  height: 24px;
  width: 24px;
`;

const ControlsFamilyIcon = styled(FamilyIcon)`
  height: 24px;
  width: 24px;
`;

const ControlsSendIcon = styled(SendIcon)`
  height: 24px;
  width: 24px;
`;

const ReloadButton = styled.button`
  align-items: center;
  background: #212121;
  border: 1px solid rgba(23, 23, 24, 0.1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  display: flex;
  fill: rgba(255, 255, 255, 0.76);
  height: 32px;
  justify-content: center;
  outline: 0;
  width: fit-content;
  &:hover {
    background: #313131;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: rgba(255, 255, 255, 1);
    fill: rgba(255, 255, 255, 1);
  }
`;

const AddButton = styled(ReloadButton)``;

const LocationButton = styled(ReloadButton)``;

const FamilyButton = styled(ReloadButton)``;

const SendButton = styled(ReloadButton)`
  background: ${(props) => (props.disabled ? "rgba(221,133,6, 1)" : "#212121")};
`;

const ControlItem = styled.div`
  margin: auto 4px;
  background: #212121;

  @media (max-width: 360px) {
    margin: auto 2px;
  }
`;

const Controls = (props) => {
  const { handleAddSub, handleOptions, handleReload, handleSend, disabled } =
    props;

  return (
    <ControlsWrapper>
      <ControlItem>
        <LocationButton name="setting" onClick={handleOptions}>
          <ControlsLocationIcon />
        </LocationButton>
      </ControlItem>
      <ControlItem>
        <FamilyButton name="family" onClick={handleOptions}>
          <ControlsFamilyIcon />
        </FamilyButton>
      </ControlItem>
      <ControlItem>
        <AddButton name="add" onClick={handleAddSub}>
          <ControlsPersonIcon />
          <ControlsAddIcon />
        </AddButton>
      </ControlItem>
      <ControlItem>
        <ReloadButton onClick={handleReload}>
          <ControlsReloadIcon />
        </ReloadButton>
      </ControlItem>
      <ControlItem>
        <SendButton
          name="send"
          alt="Send"
          title="Send"
          onClick={handleSend}
          disabled={disabled}
        >
          <ControlsSendIcon />
        </SendButton>
      </ControlItem>
    </ControlsWrapper>
  );
};

export default memo(Controls);
