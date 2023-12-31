import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
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
import { InfoIcon } from "./buttons/icons";
import Modal from "react-modal";

const getEndPoint = () => {
  if (window.location.href.includes("tailspin.fun")) {
    return "https://tailspin.fun/api/v1/create-story";
  }

  if (window.location.href.includes("www.tailspin.fun")) {
    return "https://www.tailspin.fun/api/v1/create-story";
  }

  return "http://localhost:8080/api/v1/create-story";
};

const storyEndpoint = getEndPoint();

const StoryContainer = styled.div`
  background: #212121;
  margin: 0 auto;
  max-width: 444px;
  font-family: "OpenSans", sans-serif;
  border: 1px solid rgba(255, 255, 255, 0.66);
  border-radius: 8px;
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
  line-height: 1.5;
  @media (max-width: 444px) {
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: fit-content;
    padding: 4px 8px;
  }
`;

const LoadingWrapper = styled.div`
  margin: 0 auto;
  max-width: 444px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Label = styled.div`
  color: rgba(255, 255, 255, 0.33);
  font-size: 12px;
  padding-left: 0px;
  letter-spacing: -0.5px;
  font-family: OpenSans, sans-serif;
  margin-top: 8px;
  margin-left: 16px;
`;

const InfoWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: flex-end;
  justify-content: flex-end;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.77);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.66)",
  },
  content: {
    margin: "0 auto",
    borderRadius: "16px",
    top: "20%",
    height: "fit-content",
    padding: "40px",
    width: "fit-content",
    background: "#212121",
    border: "1px solid rgba(255, 255, 255, 0.33)",
    display: "flex",
    flexDirection: "column",
  },
};

const ModalTitle = styled.h3`
  color: rgba(255, 255, 255, 0.77);
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
`;

const CredentialsInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.77);
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
  margin-top: 8px;
  width: 90%;
  height: 32px;
  padding: 0 8px;
  &:focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.77);
  }
`;

const SetCredentialsButton = styled.button`
  background: #212121;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.77);
  font-size: 14px;
  font-weight: 500;
  width: fit-content;
  align-self: center;
  padding: 8px 16px;
  &:focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.77);
    background: #313131;
  }
`;

const SaveWrapper = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const SaveButton = styled.button`
  background: #212121;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 100px;
  color: rgba(255, 255, 255, 0.77);
  font-size: 14px;
  font-weight: 500;
  width: fit-content;
  align-self: center;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  &:focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.77);
    background: #313131;
  }
`;

const FakeLink = styled.a``;

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

Modal.setAppElement("#root");

export default function Story(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [story, setStory] = useState(() => storyLine({}));
  const [loading, setLoading] = useState(false);
  const [generatedStory, setGeneratedStory] = useState("");
  const [options, setOptions] = useState({
    showFamily: true,
    showSetting: true,
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const afterOpenModal = () => {
    console.log("afterOpenModal");
  };

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

    try {
      setLoading(true);
      setGeneratedStory("Creating your story...");
      const response = await fetch(storyEndpoint, {
        method: "POST",
        headers: {
          "x-credentials": password,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ story }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setGeneratedStory(data.story);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const { name, message } = error;
      console.error(`Could not post story: ${name} ${message}`);
    }
  };

  const handleSavePassword = (e) => {
    const password = e.target.value;
    sessionStorage.setItem("demoPassword", password);
    setPassword(password);
  };

  useEffect(() => {
    const password = sessionStorage.getItem("demoPassword");
    if (password) {
      setPassword(password);
    }
  }, []);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalTitle>Enter demo credentials</ModalTitle>
        <CredentialsInput
          placeholder="Credentials"
          type="text"
          onChange={handleSavePassword}
          value={password}
        />
        <SaveButton onClick={closeModal}>Save</SaveButton>
      </Modal>
      <StoryContainer>
        <InfoWrapper>
          <FakeLink
            data-tooltip-id="tooltip"
            data-tooltip-content="Click on any word to change it."
            data-tooltip-delay-hide={250}
            data-tooltip-delay-show={250}
            data-tooltip-effect="solid"
            data-tooltip-place="top"
          >
            <InfoIcon />
          </FakeLink>
          <Tooltip id="tooltip" />
        </InfoWrapper>
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
        <Label>Tone</Label>
        <Tone tone={story.tone} handleClick={handleClick} />
        <Label>Ending</Label>
        <Ending ending={story.ending} handleClick={handleClick} />
        <Label>Setting</Label>
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
          disabled={!password}
        />
      </StoryContainer>
      {!loading && !generatedStory && (
        <SaveWrapper>
          <SetCredentialsButton onClick={openModal}>
            Enter demo password
          </SetCredentialsButton>
        </SaveWrapper>
      )}

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
