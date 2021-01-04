import { givenNames, familyNames } from "../data/names";
import { allWords } from "../data/words";
import { locations, times } from "../data/settings.js";
import { conflicts } from "../constants";
import themes from "../data/themes";
import { randomItems } from "./sort";

const getRandomConflicts = ({ number = 1, current = [] }) =>
  randomItems(conflicts, number, current);

const getRandomGivens = ({ number = 1, current = [] }) =>
  randomItems(givenNames, number, current);

const getRandomFamilies = ({ number = 1, current = [] }) =>
  randomItems(familyNames, number, current);

const getRandomAllWords = ({ number = 1, current = [] }) =>
  randomItems(allWords, number, current);

const getRandomLocations = ({ number = 1, current = [] }) =>
  randomItems(locations, number, current);

const getRandomThemes = ({ number = 1, current = [] }) =>
  randomItems(themes, number, current);

const getRandomTimes = ({ number = 1, current = [] }) =>
  randomItems(times, number, current);

export {
  getRandomAllWords,
  getRandomConflicts,
  getRandomFamilies,
  getRandomGivens,
  getRandomLocations,
  getRandomThemes,
  getRandomTimes,
};
