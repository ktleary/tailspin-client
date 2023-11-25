import React from "react";
import styled from "styled-components";

const SettingWrapper = styled.div`
  align-items: center;
  background: #212121;
  display: flex;
  height: 16px;
  justify-content: flex-start;
  padding: 8px 20px;
`;

const SettingItem = styled.div`
  cursor: pointer;
  font-size: 16px;
  margin-right: 4px;
  &:hover {
    color: rgba(100, 255, 218, 0.76);
  }
`;

export default function Setting(props) {
  const { handleClick, location, showSetting, time } = props;

  return (
    <SettingWrapper>
      {showSetting && (
        <>
          <SettingItem name="time" onClick={handleClick}>
            {time},
          </SettingItem>
          <SettingItem name="location" onClick={handleClick}>
            {location}
          </SettingItem>
        </>
      )}
    </SettingWrapper>
  );
}
