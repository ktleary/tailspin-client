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

const ProfilePhoto = styled.img`
  border-radius: 24px;
  height: 48px;
  margin-right: 12px;
  width: 48px;
`;

function createProfileImage({ url, givenName, familyName, idx }) {
  let image;
  if (!url && (givenName || familyName)) {
    const letter1 = givenName && givenName.charAt(0);
    const letter2 = familyName && familyName.charAt(0);
    image = (
      <ProfileInitials>
        {letter1}
        {letter2}
      </ProfileInitials>
    );
  }
  if (url) {
    image = <ProfilePhoto src={url} />;
  }

  return <ProfileImageWrapper>{image}</ProfileImageWrapper>;
}

const randomInt = (min = 0, max = 99) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Character {
  constructor({ givenName, familyName, image, idx }) {
    this.givenName = givenName || randomItems(givenNames).join("");
    this.familyName = familyName || randomItems(familyNames).join("");
    this.idx = idx || -1;
    this.image = image || this.createImage();
  }
  createImage() {
    const random = randomInt();
    console.log({ random });
    return createProfileImage({
      givenName: this.givenName,
      familyName: this.familyName,
      idx: this.idx,
      url: `/images/${randomInt()}.png`,
    });
  }
}

class StoryLine {
  constructor({ theme, conflict, characters, words, setting }) {
    this.theme = theme || randomItems(themes).join("");
    this.conflict = conflict || randomItems(conflicts).join("");
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

const update = {
  theme: (currentTheme) => randomItems(themes, 1, currentTheme).join(""),
  conflict: (currentConflict) =>
    randomItems(conflicts, 1, currentConflict).join(""),
  givenName: (currentName) => randomItems(givenNames, 1, currentName).join(""),
  familyName: (currentName) =>
    randomItems(familyNames, 1, currentName).join(""),
  image: (currentImage) => randomItems(),
};

export default function Story(props) {
  const [story, setStory] = useState(new StoryLine({}));

  const handleClick = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setStory({
      ...story,
      [name]: update[name](story[name]),
    });
  };
  const handleCharacter = (name, row) => {
    const { characters } = { ...story };
    const currentValue = characters[row][name];
    const updated = update[name](currentValue);
    characters[row][name] = updated;

    setStory({
      ...story,
      characters,
    });
  };
  return (
    <StoryContainer>
      <Theme theme={story.theme} handleClick={handleClick} />
      <Conflict conflict={story.conflict} handleClick={handleClick} />
      {story.characters.map((character, idx) => (
        <StoryCharacter
          character={character}
          key={`character-${idx}`}
          handleCharacter={handleCharacter}
          idx={idx}
        />
      ))}
      <StoryWords words={story.words} />
    </StoryContainer>
  );
}
