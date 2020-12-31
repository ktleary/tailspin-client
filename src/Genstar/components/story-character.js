import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  padding-left: 16px;
`;

const ProfilePictureCell = styled.div`
  cursor: pointer;
  height: 48px;
  &:hover {
    color: #64ffda;
  }
`;

const NameCell = styled.div`
  cursor: pointer;
  margin-right: 6px;
  &:hover {
    color: #64ffda;
  }
`;

export default function StoryCharacter(props) {
  const { character, handleCharacter, idx } = props;
  return (
    <CharacterWrapper>
      <ProfilePictureCell onClick={() => handleCharacter("image", idx)}>
        {character.image}
      </ProfilePictureCell>
      <NameCell onClick={() => handleCharacter("givenName", idx)}>
        {character.givenName}
      </NameCell>
      <NameCell onClick={() => handleCharacter("familyName", idx)}>
        {character.familyName}
      </NameCell>
    </CharacterWrapper>
  );
}
