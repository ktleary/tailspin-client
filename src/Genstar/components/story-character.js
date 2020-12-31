import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  padding-left: 16px;
`;

const ProfilePictureCell = styled.div`
  height: 48px;
`;

const NameCell = styled.div`
  margin-right: 6px;
`;

export default function StoryCharacter(props) {
  const { character } = props;
  return (
    <CharacterWrapper>
      <ProfilePictureCell>{character.image}</ProfilePictureCell>
      <NameCell>{character.givenName}</NameCell>
      <NameCell>{character.familyName}</NameCell>
    </CharacterWrapper>
  );
}
