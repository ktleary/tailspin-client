import React, { useState } from "react";
import styled from "styled-components";
import Theme from "./theme";
import Conflict from "./conflict";
import StoryCharacter from "./story-character";
import StoryWords from "./story-words";
import themes from "../data/themes";
import { givenNames, familyNames } from "../data/names";

import { allWords } from "../data/words";

const shuffle = (items) =>
  items
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

const conflicts = [
  "Character vs. Nature",
  "Character vs. Self",
  "Character vs. Machine",
  "Character vs. Society",
];

// const randomNewElement = (arr, currentEl) =>
//   arr.filter((el) => el !== currentEl)[Math.floor(Math.random() * arr.length)];

const randomItems = (array, number = 1, currentItems = []) =>
  shuffle(array)
    .filter((item) => !currentItems.includes(item))
    .slice(0, number);

const getSetting = () => "Paris, France";

const ProfileImageWrapper = styled.div`
  height: 64px;
`;

const ProfileInitials = styled.div`
  background-color: #64b5f6;
  border-radius: 30px;
  color: rgba(255, 255, 255, 0.87);
  display: inline-flex;
  font-size: 24px;
  height: 48px;
  justify-content: center;
  line-height: 48px;
  margin-right: 16px;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  width: 48px;
`;

const ProfilePhoto = styled.img``;

function createProfileImage({ url, givenName, familyName, idx }) {
  let image;
  if (!url && (givenName || familyName)) {
    const letter1 = givenName && givenName.charAt(0);
    const letter2 = familyName && familyName.charAt(0);
    image = (
      <ProfileInitials>
        {letter1}{letter2}
      </ProfileInitials>
    );
  }
  if (url) {
    image = <ProfilePhoto src={url} />;
  }

  return <ProfileImageWrapper>{image}</ProfileImageWrapper>;
}

class Character {
  constructor({ givenName, familyName, image, idx }) {
    this.givenName = givenName || randomItems(givenNames).join("");
    this.familyName = familyName || randomItems(familyNames).join("");
    this.idx = idx || -1;
    this.image = image || this.createImage();
  }
  createImage() {
    return createProfileImage({
      givenName: this.givenName,
      familyName: this.familyName,
      idx: this.idx,
    });
  }
}

class StoryLine {
  constructor({ theme, conflict, characters, words, setting }) {
    this.theme = theme || randomItems(themes);
    this.conflict = conflict || randomItems(conflicts);
    this.characters = characters || [
      new Character({ idx: 1 }),
      new Character({ idx: 2 }),
    ];
    this.words = words || randomItems(allWords, 4);
    this.setting = setting || getSetting(setting);
  }
}

const StoryContainer = styled.div`
  background: #2f353d;
  margin: 0 16px;
`;

export default function Story(props) {
  const [story, setStory] = useState(new StoryLine({}));

  const handleUpdateStory = (updatedStory) => {
    const newStory = Object.assign(story, updatedStory);
    setStory(newStory);
  };
  return (
    <StoryContainer>
      <Theme theme={story.theme} handleUpdateStory={handleUpdateStory} />
      <Conflict conflict={story.conflict} />
      {story.characters.map((character, i) => (
        <StoryCharacter character={character} key={`character-${i}`} />
      ))}
      <StoryWords words={story.words} />
    </StoryContainer>
  );
}
