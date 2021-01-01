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

const ProfilePhoto = styled.img`
  border-radius: 34px;
  height: 48px;
  width: 48px;
`;

const NameHolder = styled.div`
  display: block;
`;
const NameRow = styled.div`
  display: flex;
`;

const WordCell = styled.div`
  color: rgba(255, 255, 255, 0.76);
  cursor: pointer;
  font-size: 76%;
  font-style: italic;
  padding: 4px 2px;
  &:hover {
    color: rgba(100, 255, 218, 0.76);
  }
`;

export default function StoryCharacter(props) {
  const { character, handleCharacter, idx } = props;

  return (
    <CharacterWrapper>
      <ProfilePictureCell onClick={() => handleCharacter("image", idx)}>
        {character.image}
      </ProfilePictureCell>
      <NameHolder>
        <NameRow>
          <NameCell onClick={() => handleCharacter("givenName", idx)}>
            {character.givenName}
          </NameCell>
          <NameCell onClick={() => handleCharacter("familyName", idx)}>
            {character.familyName}
          </NameCell>
        </NameRow>
        <NameRow>
          {character.attributes.map((attribute, j) => (
            <WordCell
              onClick={() => handleCharacter("attributes", idx, j)}
              key={`attribute-${j}`}
            >
              {attribute}
            </WordCell>
          ))}
        </NameRow>
      </NameHolder>
    </CharacterWrapper>
  );
}
