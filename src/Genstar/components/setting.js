import React from "react";
import styled from "styled-components";

const SettingWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 16px;
  padding-bottom: 0;
`;

const SettingItem = styled.div`
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  font-size: 90%;
  margin-right: 4px;
  &:hover {
    color: rgba(100, 255, 218, 0.76);
  }
`;

export default function Setting(props) {
  const { handleClick, location, time } = props;
  return (
    <SettingWrapper>
      <SettingItem name="time" onClick={handleClick}>
        {time},
      </SettingItem>
      <SettingItem name="location" onClick={handleClick}>
        {location}
      </SettingItem>
    </SettingWrapper>
  );
}
