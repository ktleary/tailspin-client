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
} from "./data";

export const rankEndpoint = () => {
  if (typeof window !== "undefined" && window.location?.href?.includes("tailspin.fun")) {
    return "https://tailspin.fun/api/v1/rank-suggestions";
  }
  return "http://localhost:8080/api/v1/rank-suggestions";
};

const POOL = 8;

export const candidatePool = (field, current) => {
  const cur = Array.isArray(current) ? current : current != null ? [current] : [];
  const n = POOL;
  switch (field) {
    case "theme":
      return getRandomThemes({ number: n, current: cur });
    case "conflict":
      return getRandomConflicts({ number: n, current: cur });
    case "plotPoint":
      return getRandomPlotPoint({ number: n, current: cur });
    case "tone":
      return getRandomTones({ number: n, current: cur });
    case "ending":
      return getRandomEndings({ number: n, current: cur });
    case "location":
      return getRandomLocations({ number: n, current: cur });
    case "time":
      return getRandomTimes({ number: n, current: cur });
    case "givenName":
      return getRandomGivens({ number: n, current: cur });
    case "familyName":
      return getRandomFamilies({ number: n, current: cur });
    case "occupation":
      return getRandomOccupation({ number: n, current: cur });
    case "attributes":
      return getRandomAllWords({ number: n, current: cur });
    case "age":
      return getRandomAge({ number: n, current: cur });
    default:
      return [];
  }
};

export async function rankSuggestions({
  story,
  field,
  candidates,
  fetchImpl = fetch,
  endpoint = rankEndpoint(),
}) {
  const response = await fetchImpl(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ story, field, candidates }),
  });
  if (!response.ok) {
    throw new Error(`rank-suggestions ${response.status}`);
  }
  return response.json();
}

export const pickRankedOrFallback = (result, fallback) => {
  if (result && Array.isArray(result.sampled) && result.sampled.length) {
    return result.sampled[0];
  }
  return fallback;
};
