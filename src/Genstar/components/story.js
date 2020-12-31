import React, { useState } from "react";
import styled from "styled-components";
import Theme from "./theme";
import Conflict from "./conflict";
import StoryWords from "./story-words";
import themes from "../data/themes";

import { positiveWords, negativeWords } from "../data/words";

const conflictTypes = [
  "Character vs. Nature",
  "Character vs. Self",
  "Character vs. Machine",
  "Character vs. Society",
];

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getTheme = (theme) =>
  randomElement(themes.filter((item) => item !== theme));

const getConflict = (storyType) =>
  randomElement(conflictTypes.filter((item) => item !== storyType));

// const getWord = (currentWords) => {
//   const newWords = negativeWords
//     .concat(positiveWords)
//     .filter((word) => !currentWords.contains(word));
//   return randomElement(newWords);
// };

const getNewWords = (excludedWords) =>
  negativeWords
    .concat(positiveWords)
    .filter((word) => !excludedWords.contains(excludedWords));

const getWords = (currentWords) => {
  // newWords are all words excluding current words and new Words
  // for the length of current words, if any are "", get new word

  const excludedWords = [...currentWords];

  const getNewWords = (excluded) =>
    positiveWords
      .concat(negativeWords)
      .filter((word) => !excluded.includes(word));

  const newStoryWords = currentWords
    .filter((currentWord) => !currentWord.length)
    .map((currentWord) => {
      const newWords = getNewWords(excludedWords);
      const newWord = randomElement(newWords);
      excludedWords.push(newWord);
      return newWord;
    });

  console.log(newStoryWords);
  return newStoryWords;
};

class CharacterDetails {
  constructor({ givenName, familyName, imageData }) {
    this.givenName = givenName || "";
    this.familyName = familyName || "";
    this.imageData = imageData || "";
  }
}

const getSetting = () => "Paris, France";

const getCharacters = () => [
  new CharacterDetails({}),
  new CharacterDetails({}),
];

const formStory = ({ theme, conflict, characters, words, setting }) => ({
  theme: theme ? theme : getTheme(),
  conflict: conflict ? conflict : getConflict(),
  characters: !!characters && getCharacters(characters || [{}, {}]),
  words: words !== false && getWords(words || ["", "", "", ""]),
  setting: setting && getSetting(),
});

const StoryContainer = styled.div`
  background: #2f353d;
  margin: 0 16px;
`;

export default function Story(props) {
  const [story, setStory] = useState(formStory({}));

  const handleUpdateStory = (updatedStory) => {
    const newStory = Object.assign(story, updatedStory);
    setStory(newStory);
  };
  return (
    <StoryContainer>
      <Theme theme={story.theme} handleUpdateStory={handleUpdateStory} />
      <Conflict conflict={story.conflict} />
      <StoryWords words={story.words} />
    </StoryContainer>
  );
}
