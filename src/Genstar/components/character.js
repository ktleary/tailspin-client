import { createProfileUrl } from "./profile-image";
import {
  getRandomAllWords,
  getRandomFamilies,
  getRandomGivens,
} from "../util/data";

const character = ({ attributes, givenName, familyName, imageUrl, idx }) => {
  return {
    givenName: givenName || getRandomGivens({ number: 1 }).join(""),
    familyName: familyName || getRandomFamilies({ number: 1 }).join(""),
    idx: idx || idx === 0 ? idx : -1,
    image: imageUrl || createProfileUrl(),
    attributes: attributes || getRandomAllWords({ number: 2 }),
  };
};

export { character };
