import { createProfileUrl } from "./profile-image";
import {
  getRandomAllWords,
  getRandomFamilies,
  getRandomGivens,
  getRandomOccupation,
  getRandomAge,
} from "../util/data";

const character = ({
  attributes,
  givenName,
  familyName,
  imageUrl,
  idx,
  age,
  occupation,
}) => {
  return {
    givenName: givenName || getRandomGivens({ number: 1 }).join(""),
    familyName: familyName || getRandomFamilies({ number: 1 }).join(""),
    idx: idx || idx === 0 ? idx : -1,
    image: imageUrl || createProfileUrl(),
    attributes: attributes || getRandomAllWords({ number: 2 }),
    age: age || getRandomAge({ number: 1 }),
    occupation: occupation || getRandomOccupation({ number: 1 }),
  };
};

export { character };
