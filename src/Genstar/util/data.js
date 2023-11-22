import { givenNames, familyNames } from "../data/names";
import { allWords } from "../data/words";
import { locations, times } from "../data/settings.js";
import { conflicts } from "../constants";
import themes from "../data/themes";
import plotPoints from "../data/plot-points";
import { randomItems } from "./sort";
import { tones, endings } from "../data/endings";
import { occupation } from "../data/occupation";

const age = [
  1, 7, 12, 16, 18, 21, 25, 27, 33, 35, 39, 42, 45, 49, 52, 55, 62, 65, 72, 77,
  88,
];

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

const getRandomPlotPoint = ({ number = 1, current = [] }) =>
  randomItems(plotPoints, number, current);

// tones

const getRandomTones = ({ number = 1, current = [] }) =>
  randomItems(tones, number, current);

const getRandomEndings = ({ number = 1, current = [] }) =>
  randomItems(endings, number, current);

const getRandomAge = ({ number = 1, current = [] }) =>
  randomItems(age, number, current);

const getRandomOccupation = ({ number = 1, current = [] }) =>
  randomItems(occupation, number, current);

export {
  getRandomAllWords,
  getRandomConflicts,
  getRandomFamilies,
  getRandomGivens,
  getRandomLocations,
  getRandomThemes,
  getRandomTimes,
  getRandomPlotPoint,
  getRandomTones,
  getRandomEndings,
  getRandomAge,
  getRandomOccupation,
};
