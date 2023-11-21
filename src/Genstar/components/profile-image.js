import React, { memo } from "react";
import styled from "styled-components";
import { getEnv } from "../util/env";
import { randomInt } from "../util/sort";

const ProfileImageWrapper = styled.div`
  height: 56px;
`;

const ProfilePhoto = styled.img`
  border-radius: 28px;
  height: 56px;
  width: 56px;
`;

const createProfileUrl = () => {
  const path = getEnv();
  const random = randomInt();
  return `${path}/images/${random}.png`;
};

const ProfileImage = memo(({ src }) => {
  return (
    <ProfileImageWrapper>
      <ProfilePhoto src={src} />
    </ProfileImageWrapper>
  );
});

export { ProfileImage, createProfileUrl };
