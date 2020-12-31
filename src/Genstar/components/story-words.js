import React from "react";
import styled from "styled-components";

const StoryWordsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 16px;
`;

const StoryWord = styled.div`
  align-items: center;
  display: flex;
  font-style: italic;
  justify-content: left;
  padding: 0 8px 0 0;

`;

export default function StoryWords({ words }) {
  return (
    <StoryWordsWrapper>
      {words.map((word, i) => (
        <StoryWord key={`${word}${i}`}>{word}</StoryWord>
      ))}
    </StoryWordsWrapper>
  );
}
