import React, { useState } from "react";
import styled from "styled-components";
import Theme from "./theme";
import Conflict from "./conflict";
import StoryCharacter from "./story-character";
import Setting from "./setting";
import Controls from "./controls";
import themes from "../data/themes";
import { givenNames, familyNames } from "../data/names";
import { allWords } from "../data/words";
import { locations, times } from "../data/settings.js";
import { randomInt, randomItems } from "../util/sort";
import { getEnv } from "../util/env";
import { conflicts } from "../constants";

const StoryContainer = styled.div`
  background: rgba(17, 17, 18, 1);
  margin: 0 auto;
  max-width: 444px;
  @media (max-width: 444px) {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const ProfileImageWrapper = styled.div`
  height: 56px;
`;

const ProfilePhoto = styled.img`
  border-radius: 28px;
  height: 56px;
  width: 56px;
`;

const createProfileImage = ({ url }) => (
  <ProfileImageWrapper>
    <ProfilePhoto src={url} />
  </ProfileImageWrapper>
);

const createProfileUrl = () => {
  const path = getEnv();
  const random = randomInt();
  return `${path}/images/${random}.png`;
};

class Character {
  constructor({ attributes, givenName, familyName, image, idx }) {
    this.givenName = givenName || randomItems(givenNames).join("");
    this.familyName = familyName || randomItems(familyNames).join("");
    this.idx = idx || -1;
    this.image = image || this.createImage();
    this.attributes = attributes || randomItems(allWords, 2);
  }
  createImage = () =>
    createProfileImage({
      url: createProfileUrl(),
    });
}

class StoryLine {
  constructor({ theme, conflict, characters, location, time }) {
    this.theme = theme || randomItems(themes).join("");
    this.conflict = conflict || randomItems(conflicts).join("");
    this.characters = characters || [
      new Character({ idx: 1 }),
      new Character({ idx: 2 }),
      new Character({ idx: 3 }),
    ];
    this.location = location || randomItems(locations, 1).join("");
    this.time = time || randomItems(times, 1).join("");
  }
}

const update = {
  theme: (currentTheme) => randomItems(themes, 1, currentTheme).join(""),
  conflict: (currentConflict) =>
    randomItems(conflicts, 1, currentConflict).join(""),
  givenName: (currentName) => randomItems(givenNames, 1, currentName).join(""),
  familyName: (currentName) =>
    randomItems(familyNames, 1, currentName).join(""),
  image: (currentImage) => createProfileImage({ url: createProfileUrl() }),
  attributes: (currentAttributes) =>
    randomItems(allWords, 1, currentAttributes).join(""),
  location: (currentLocation) =>
    randomItems(locations, 1, currentLocation).join(""),
  time: (currentTime) => randomItems(times, 1, currentTime).join(""),
};

export default function Story(props) {
  const [story, setStory] = useState(new StoryLine({}));
  const [options, setOptions] = useState({
    showFamily: true,
    showSetting: false,
  });

  const handleClick = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setStory({
      ...story,
      [name]: update[name](story[name]),
    });
  };

  const handleCharacter = (name, row, column) => {
    const { characters } = { ...story };
    const currentValue = characters[row][name];
    const updated = update[name](currentValue);

    column !== undefined
      ? (characters[row][name][column] = updated)
      : (characters[row][name] = updated);
    setStory({
      ...story,
      characters,
    });
  };

  const handleReload = () => {
    setStory(new StoryLine({}));
  };

  const handleAddSub = (e) => {
    const name = e.currentTarget.getAttribute("name");
    if (!name) return;
    const { characters } = { ...story };
    name === "subtract"
      ? characters.splice(-1, 1)
      : characters.push(new Character({ idx: characters.length + 1 }));
    setStory({
      ...story,
      characters,
    });
  };

  const handleOptions = (e) => {
    const name = e.currentTarget.getAttribute("name");
    if (!name) return;
    if (name === "setting") {
      const { showSetting } = { ...options };
      setOptions({ ...options, showSetting: !showSetting });
    }
    if (name === "family") {
      const { showFamily } = { ...options };
      setOptions({ ...options, showFamily: !showFamily });
    }
  };

  const handleRemoveCharacter = (e) => {
    const { id } = e.currentTarget;
    if (!id) console.log("no id");
    const { characters } = { ...story };
    characters.splice(id, 1);
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
          handleRemoveCharacter={handleRemoveCharacter}
          showFamily={options.showFamily}
          idx={idx}
        />
      ))}
      <Setting
        time={story.time}
        location={story.location}
        handleClick={handleClick}
        showSetting={options.showSetting}
      />
      <Controls
        handleAddSub={handleAddSub}
        handleReload={handleReload}
        handleOptions={handleOptions}
        handleRemoveCharacter={handleRemoveCharacter}
      />
    </StoryContainer>
  );
}
