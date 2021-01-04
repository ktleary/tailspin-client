import { cleanup } from "@testing-library/react";
import { remotePath } from "../constants";
import { getEnv } from "../util/env";

function overrideWindowHostName({ hostname, href, search }) {
  delete global.window.location;
  global.window.location = { href, search };
  global.window.location.hostname = hostname;
}

test("should return empty string", () => {
  overrideWindowHostName({
    href: "http://localhost:9999",
    hostname: "localhost",
  });
});

test("should return the remotePath", () => {
  const newUrl = new URL(remotePath);
  overrideWindowHostName({
    href: remotePath,
    hostname: newUrl.host,
  });

  expect(getEnv()).toEqual(remotePath);
});

afterEach(cleanup);
