import { remotePath } from "../constants";

export const getEnv = () =>
  window && window.location && window.location.hostname === "stringtalk.org"
    ? remotePath
    : "";
