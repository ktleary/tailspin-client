import React from "react";
import styled from "styled-components";
import {
  AddIcon,
  AddLocationIcon,
  PersonIcon,
  ReloadIcon,
  SubtractIcon,
} from "./buttons/icons";

const ControlsWrapper = styled.div`
  background: #292929;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
  padding: 16px;
  padding-right: 0;
  padding-bottom: 0;
`;

const ControlsReloadIcon = styled(ReloadIcon)`
  height: 24px;
  width: 24px;
`;

const ControlsAddIcon = styled(AddIcon)`
  height: 12px;
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

const ControlsSubtractIcon = styled(SubtractIcon)`
  color: rgba(255, 255, 255, 0.66);
  fill: rgba(255, 255, 255, 0.66);
  background: transparent;
  height: 12px;
  width: 12px;
`;

const ReloadButton = styled.button`
  align-items: center;
  background: #2f353d;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  display: flex;
  fill: rgba(255, 255, 255, 0.76);
  height: 32px;
  justify-content: center;
  outline: 0;
  width: 56px;
  &:hover {
    fill: rgba(255, 255, 255, 1);
  }
`;

const SubtractButton = styled(ReloadButton)``;

const AddButton = styled(ReloadButton)``;

const LocationButton = styled(ReloadButton)``;

const ControlItem = styled.div`
  margin: auto 8px;
`;

export default function Controls(props) {
  const { handleAddSub, handleOptions, handleReload } = props;
  return (
    <ControlsWrapper>
      <ControlItem>
        <LocationButton
          title="Add Setting"
          name="setting"
          onClick={handleOptions}
        >
          <ControlsLocationIcon />
        </LocationButton>
      </ControlItem>
      <ControlItem>
        <SubtractButton
          title="Remove Character"
          name="subtract"
          onClick={handleAddSub}
        >
          <ControlsPersonIcon />
          <ControlsSubtractIcon />
        </SubtractButton>
      </ControlItem>

      <ControlItem>
        <AddButton title="Add Character" name="add" onClick={handleAddSub}>
          <ControlsPersonIcon />
          <ControlsAddIcon />
        </AddButton>
      </ControlItem>

      <ControlItem>
        <ReloadButton onClick={handleReload} title="Load New Story">
          <ControlsReloadIcon />
        </ReloadButton>
      </ControlItem>
    </ControlsWrapper>
  );
}