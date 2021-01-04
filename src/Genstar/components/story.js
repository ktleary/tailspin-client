import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Theme from "./theme";
import Character from "./character";
import Conflict from "./conflict";
import StoryCharacter from "./story-character";
import Setting from "./setting";
import Controls from "./controls";
import ProfileImage from "./profile-image";
import { getEnv } from "../util/env";
import {
  getRandomAllWords,
  getRandomConflicts,
  getRandomGivens,
  getRandomFamilies,
  getRandomLocations,
  getRandomThemes,
  getRandomTimes,
} from "../util/data";

const StoryContainer = styled.div`
  background: rgba(17, 17, 18, 1);
  margin: 0 auto;
  max-width: 444px;
  @media (max-width: 444px) {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

class StoryLine {
  constructor({ theme, conflict, characters, location, time }) {
    this.theme = theme || getRandomThemes({ number: 1 }).join("");
    this.conflict = conflict || getRandomConflicts({ number: 1 }).join("");
    this.characters = characters || [
      new Character({ idx: 1 }),
      new Character({ idx: 2 }),
      new Character({ idx: 3 }),
    ];
    this.location = location || getRandomLocations({ number: 1 }).join("");
    this.time = time || getRandomTimes({ number: 1 }).join("");
  }
}

const update = {
  theme: (currentTheme) =>
    getRandomThemes({ number: 1, current: currentTheme }).join(""),
  conflict: (currentConflict) =>
    getRandomConflicts({ number: 1, current: currentConflict }).join(""),
  givenName: (currentName) =>
    getRandomGivens({ number: 1, current: currentName }).join(""),
  familyName: (currentName) =>
    getRandomFamilies({ number: 1, current: currentName }).join(""),
  image: (currentImage) => <ProfileImage currentImage={currentImage} />,
  attributes: (currentAttributes) =>
    getRandomAllWords({ number: 1, current: currentAttributes }).join(""),
  location: (currentLocation) =>
    getRandomLocations({ number: 1, current: currentLocation }).join(""),
  time: (currentTime) =>
    getRandomTimes({ number: 1, current: currentTime }).join(""),
};

export default function Story(props) {
  const [story, setStory] = useState(new StoryLine({}));
  const [options, setOptions] = useState({
    showFamily: true,
    showSetting: false,
  });

  const handleReload = () => setStory(new StoryLine({}));
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

  const handleAddSub = (e) => {
    const name = e.currentTarget.getAttribute("name");
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
    if (name === "family")
      return setOptions({ ...options, showFamily: !options.showFamily });
    if (name === "setting")
      return setOptions({ ...options, showSetting: !options.showSetting });
  };

  const handleRemoveCharacter = (e) => {
    const { id } = e.currentTarget;
    const { characters } = { ...story };
    characters.splice(id, 1);
    setStory({
      ...story,
      characters,
    });
  };

  useEffect(() => {
    const path = getEnv();
    let i = 161;
    while (i >= 0) {
      const imghld = new Image();
      imghld.src = `${path}/images/${i}.png`;
      i--;
    }
  }, []);

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
