import React from "react";
import styled from "styled-components";
import {
  AddIcon,
  AddLocationIcon,
  FamilyIcon,
  PersonIcon,
  ReloadIcon,
} from "./buttons/icons";

const ControlsWrapper = styled.div`
  background: rgba(17, 17, 18, 1);
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 16px;
  padding-left: 8px;
  padding-bottom: 16px;
  padding-top: 8px;
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

const ControlsFamilyIcon = styled(FamilyIcon)`
  height: 24px;
  width: 24px;
`;

const ReloadButton = styled.button`
  align-items: center;
  background: rgba(23, 23, 24, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
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
    background: rgba(30, 30, 31, 1);
  }
`;

const AddButton = styled(ReloadButton)``;

const LocationButton = styled(ReloadButton)``;

const FamilyButton = styled(ReloadButton)``;

const ControlItem = styled.div`
  margin: auto 8px;
`;

export default function Controls(props) {
  const { handleAddSub, handleOptions, handleReload } = props;
  return (
    <ControlsWrapper>
      <ControlItem>
        <LocationButton
          title="Toggle Location"
          name="setting"
          onClick={handleOptions}
        >
          <ControlsLocationIcon />
        </LocationButton>
      </ControlItem>
      <ControlItem>
        <FamilyButton
          title="Toggle Family Names"
          name="family"
          onClick={handleOptions}
        >
          <ControlsFamilyIcon />
        </FamilyButton>
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
