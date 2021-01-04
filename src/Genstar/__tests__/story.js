import { render, screen } from "@testing-library/react";
import StoryCharacter from "../components/story-character";

test("it should render StoryCharacter", () => {
  const character = {attributes: ["even-keeled", "agreeable"]};
  const handleCharacter = jest.fn();
  const handleRemoveCharacter = jest.fn();
  const options = { showFamily: true, showSetting: false };
  const idx = 0;
  render(
    <StoryCharacter
      character={character}
      key={`character-${idx}`}
      handleCharacter={handleCharacter}
      handleRemoveCharacter={handleRemoveCharacter}
      showFamily={options.showFamily}
      idx={idx}
    />
  );
});

/*

 <StoryCharacter
          character={character}
          key={`character-${idx}`}
          handleCharacter={handleCharacter}
          handleRemoveCharacter={handleRemoveCharacter}
          showFamily={options.showFamily}
          idx={idx}
        />

*/
