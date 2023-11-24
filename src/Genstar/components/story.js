import React, { useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import styled from "styled-components";
import {
  getRandomAge,
  getRandomAllWords,
  getRandomConflicts,
  getRandomEndings,
  getRandomFamilies,
  getRandomGivens,
  getRandomLocations,
  getRandomOccupation,
  getRandomPlotPoint,
  getRandomThemes,
  getRandomTimes,
  getRandomTones,
} from "../util/data";
import { character } from "./character";
import Conflict from "./conflict";
import Controls from "./controls";
import Ending from "./ending";
import PlotPoint from "./plot-point";
import { createProfileUrl } from "./profile-image";
import Setting from "./setting";
import StoryCharacter from "./story-character";
import Theme from "./theme";
import Tone from "./tone";

const storyEndpoint = "http://localhost:8080/api/v1/create-story";

const StoryContainer = styled.div`
  background: #212121;
  margin: 0 auto;
  max-width: 444px;
  font-family: "OpenSans", sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.66);
  border-radius: 4px;
  padding: 0.5rem;
  @media (max-width: 444px) {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const StoryTextContainer = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin: 36px auto;
  max-width: 444px;
  border-top: 1px solid rgba(255, 255, 255, 0.66);
  padding-top: 0.5rem;
  font-family: "OpenSans", sans-serif;
  min-width: 444px;
  line-height: 1.5;
  @media (max-width: 444px) {
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const LoadingWrapper = styled.div`
  margin: 0 auto;
  max-width: 444px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const removeSurname = (character) => {
  const { givenName, attributes, age, occupation, image } = character;
  return {
    givenName,
    attributes,
    age,
    occupation,
    image,
  };
};

const storyLine = ({
  theme,
  conflict,
  characters,
  location,
  time,
  plotPoint,
  tone,
  ending,
}) => {
  return {
    theme: theme || getRandomThemes({ number: 1 }).join(""),
    conflict: conflict || getRandomConflicts({ number: 1 }).join(""),
    plotPoint: plotPoint || getRandomPlotPoint({ number: 1 }).join(""),
    characters: characters || [
      character({ idx: 1 }),
      character({ idx: 2 }),
      character({ idx: 3 }),
    ],
    location: location || getRandomLocations({ number: 1 }).join(""),
    time: time || getRandomTimes({ number: 1 }).join(""),
    tone: tone || getRandomTones({ number: 1 }).join(""),
    ending: ending || getRandomEndings({ number: 1 }).join(""),
  };
};

const update = {
  theme: (currentTheme) =>
    getRandomThemes({ number: 1, current: currentTheme }).join(""),
  conflict: (currentConflict) =>
    getRandomConflicts({ number: 1, current: currentConflict }).join(""),
  plotPoint: (currentPlotPoint) =>
    getRandomPlotPoint({ number: 1, current: currentPlotPoint }).join(""),
  givenName: (currentName) =>
    getRandomGivens({ number: 1, current: currentName }).join(""),
  familyName: (currentName) =>
    getRandomFamilies({ number: 1, current: currentName }).join(""),
  image: (currentImage) => createProfileUrl({ current: currentImage }),
  attributes: (currentAttributes) =>
    getRandomAllWords({ number: 1, current: currentAttributes }).join(""),
  location: (currentLocation) =>
    getRandomLocations({ number: 1, current: currentLocation }).join(""),
  time: (currentTime) =>
    getRandomTimes({ number: 1, current: currentTime }).join(""),
  tone: (currentTone) =>
    getRandomTones({ number: 1, current: currentTone }).join(""),
  ending: (currentEnding) =>
    getRandomEndings({ number: 1, current: currentEnding }).join(""),
  occupation: (currentOccupation) =>
    getRandomOccupation({ number: 1, current: currentOccupation }).join(""),
  age: (currentAge) => getRandomAge({ number: 1, current: currentAge }),
};

export default function Story(props) {
  const [story, setStory] = useState(() => storyLine({}));
  const [loading, setLoading] = useState(false);
  const [generatedStory, setGeneratedStory] = useState("");
  const [options, setOptions] = useState({
    showFamily: true,
    showSetting: true,
  });

  const handleReload = () => setStory(storyLine({}));
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
    console.log(
      `name=${name} row=${row} column=${column} currentValue=${currentValue} updated=${updated}`
    );
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
      : characters.push(character({ idx: characters.length + 1 }));
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

  const {
    theme,
    conflict,
    characters,
    location,
    time,
    plotPoint,
    ending,
    tone,
  } = story || {};

  const postStory = async () => {
    const shouldSend = true;
    const story = {
      theme,
      conflict,
      characters: options.showFamily
        ? characters
        : characters.map(removeSurname),
      location,
      time,
      plotPoint,
      ending,
      tone,
    };

    if (!shouldSend) {
      return alert(JSON.stringify(story));
    }
    /*
endpoint is expecting this format
app.post("/api/v1/create-story", async (req: Request, res: Response) => {
  const story: Story = req.body.story;
  const { theme, characters, setting, plotPoint, conflict, ending, tone } =
    story;

    */

    try {
      setLoading(true);
      setGeneratedStory("creating story...");
      const response = await fetch(storyEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ story }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Do something with the response data
      setGeneratedStory(data.story);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const { name, message } = error;
      console.error(`Could not post story: ${name} ${message}`);
    }
  };

  return (
    <>
      <StoryContainer>
        <Theme theme={story.theme} handleClick={handleClick} />
        <Conflict conflict={story.conflict} handleClick={handleClick} />
        <PlotPoint plotPoint={story.plotPoint} handleClick={handleClick} />
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
        <Tone tone={story.tone} handleClick={handleClick} />
        <Ending ending={story.ending} handleClick={handleClick} />
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
          handleSend={postStory}
        />
      </StoryContainer>
      {loading && (
        <LoadingWrapper>
          <ProgressBar
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            height={80}
            width={80}
            borderColor="#212121"
            barColor="#64ffda"
          />
        </LoadingWrapper>
      )}
      {generatedStory && (
        <StoryTextContainer>
          {generatedStory.split("\n").map((line, idx) => (
            <p key={`generated-story-${idx}`}>{line}</p>
          ))}
        </StoryTextContainer>
      )}
    </>
  );
}
