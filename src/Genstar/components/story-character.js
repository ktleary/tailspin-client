import React, { useState } from "react";
import styled from "styled-components";
import { CloseIcon } from "./buttons/icons";

const CharacterWrapper = styled.div`
  background: rgba(17, 17, 18, 1);
  align-items: center;
  display: flex;
  height: 64px;
  padding-left: 16px;
  &:hover {
    background: #434950;
  }
`;
const CloseButton = styled.button`
  align-items: center;
  background: #434950;
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  display: flex;
  fill: rgba(255, 255, 255, 0.76);
  height: 24px;
  justify-content: center;
  outline: 0;
  width: 32px;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const ControlsCloseIcon = styled(CloseIcon)`
  height: 18px;
  width: 18px;
`;

const ProfilePictureCell = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.33);
  border-radius: 24px;
  cursor: pointer;
  height: 48px;
  margin-right: 12px;
  &:hover {
    color: #64ffda;
    border: 1px solid rgba(255, 255, 255, 1);
  }
`;

const NameCell = styled.div`
  cursor: pointer;
  margin-right: 6px;
  &:hover {
    color: #64ffda;
  }
`;

const NameHolder = styled.div`
  display: block;
  padding-top: 6px;
  vertical-align: middle;
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

const CloseContainer = styled.div`
  align-items: center;
  height: 36px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-right: 16px;
`;

export default function StoryCharacter(props) {
  const {
    character,
    handleCharacter,
    handleRemoveCharacter,
    idx,
    showFamily,
  } = props;
  const [showClose, setShowClose] = useState(false);
  const handleMouseEnter = () => setShowClose(true);
  const handleMouseOut = () => setShowClose(false);

  return (
    <CharacterWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <ProfilePictureCell onClick={() => handleCharacter("image", idx)}>
        {character.image}
      </ProfilePictureCell>
      <NameHolder>
        <NameRow>
          <NameCell onClick={() => handleCharacter("givenName", idx)}>
            {character.givenName}
          </NameCell>
          {showFamily && (
            <NameCell onClick={() => handleCharacter("familyName", idx)}>
              {character.familyName}
            </NameCell>
          )}
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
      {showClose && (
        <CloseContainer>
          <CloseButton onClick={handleRemoveCharacter} id={idx}>
            <ControlsCloseIcon />
          </CloseButton>
        </CloseContainer>
      )}
    </CharacterWrapper>
  );
}
