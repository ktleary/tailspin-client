import React, { useState } from "react";
import styled from "styled-components";
import CloseButton from "./buttons/close";
import { ProfileImage } from "./profile-image";

const CharacterCard = styled.div`
  background: transparent;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 8px;
  transition: background-color 0.3s;
  &:hover {
    background: #2b2b2b;
  }
`;

const ProfilePictureCell = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  cursor: pointer;
  min-height: 56px;
  height: 56px;
  min-width: 56px;
  width: 56px;
  margin-right: 12px;
`;

const ContentContainer = styled.div`
  display: flex;
  background: transparent;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const RoundButtonCell = styled.button`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  color: rgba(255, 255, 255, 0.87);
  font-size: 12px;
  font-weight: 500;
  font-family: "OpenSans", sans-serif;
  height: 24px;
  width: 24px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 8px;
  padding: 4px;
  border-radius: 100px;
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    background-color: #2b2b2b;
    transform: translateY(-1px);
  }
`;

const RectangleButtonCell = styled(RoundButtonCell)`
  border-radius: 8px;
  padding: 4px 8px;
  margin: 4px 8px 4px 0px;
  width: auto;
  &:hover {
    border-radius: 8px;
    background-color: #2b2b2b;
    transform: translateY(-1px);
  }
`;

const NameButtonCell = styled.button`
  border-radius: 8px;
  padding: 4px 4px;
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.87);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin: 2px 4px 2px 0px;
  font-size: 20px;
  transition: background-color 0.3s, transform 0.2s;
  width: auto;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    background-color: #2b2b2b;
    transform: translateY(-1px);
  }
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const CloseContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-right: 0px;
`;

export default function StoryCharacter(props) {
  const { character, handleCharacter, handleRemoveCharacter, idx, showFamily } =
    props;
  const [showClose, setShowClose] = useState(false);
  const handleMouseEnter = () => setShowClose(true);
  const handleMouseOut = () => setShowClose(false);

  return (
    <CharacterCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <ProfilePictureCell onClick={() => handleCharacter("image", idx)}>
        <ProfileImage src={character.image} />
      </ProfilePictureCell>
      <ContentContainer>
        <ContentRow onClick={() => handleCharacter("givenName", idx)}>
          <NameButtonCell>{character.givenName}</NameButtonCell>
          {showFamily && (
            <NameButtonCell onClick={() => handleCharacter("familyName", idx)}>
              {character.familyName}
            </NameButtonCell>
          )}
        </ContentRow>
        <ContentRow>
          {character.attributes.map((attribute, j) => (
            <RectangleButtonCell
              onClick={() => handleCharacter("attributes", idx, j)}
              key={`attribute-${j}`}
            >
              {attribute}
            </RectangleButtonCell>
          ))}
        </ContentRow>
        <ContentRow>
          <RoundButtonCell onClick={() => handleCharacter("age", idx)}>
            {character.age}
          </RoundButtonCell>
          <RectangleButtonCell
            onClick={() => handleCharacter("occupation", idx)}
          >
            {character.occupation}
          </RectangleButtonCell>
        </ContentRow>
      </ContentContainer>
      {showClose && (
        <CloseContainer>
          <CloseButton idx={idx} handleClick={handleRemoveCharacter} />
        </CloseContainer>
      )}
    </CharacterCard>
  );
}
