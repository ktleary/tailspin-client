import createProfileImage from "./profile-image";
import {
  getRandomAllWords,
  getRandomFamilies,
  getRandomGivens,
} from "../util/data";

export default class Character {
  constructor({ attributes, givenName, familyName, image, idx }) {
    this.givenName = givenName || getRandomGivens({ number: 1 }).join("");
    this.familyName = familyName || getRandomFamilies({ number: 1 }).join("");
    this.idx = idx || idx === 0 ? idx : -1;
    this.image = image || createProfileImage();
    this.attributes = attributes || getRandomAllWords({ number: 2 });
  }
}
