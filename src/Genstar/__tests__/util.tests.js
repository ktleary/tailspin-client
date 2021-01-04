import { cleanup } from "@testing-library/react";
import { remotePath } from "../constants";
import { getEnv } from "../util/env";
import { randomInt, randomItems } from "../util/sort";

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

test("it should return 1 random item", () => {
  const array = ["one", "two", "three"];
  const items = randomItems(array);

  expect(items.length).toEqual(1);
});

test("it should return 3 random item", () => {
  const array = ["one", "two", "three"];
  const items = randomItems(array, 3);

  expect(items.length).toEqual(3);
});

test("it should return 2 random item not including existing item", () => {
  const array = ["one", "two", "three"];
  const items = randomItems(array, 2, "two");

  expect(items.length).toEqual(2);
  expect(items.includes("two")).toEqual(false);
});

it("should return a random number between 1 and 10", () => {
  const min = 1;
  const max = 10;
  const random = randomInt(min, max);

  expect(random < 10 && random > 0).toEqual(true);
});

afterEach(cleanup);
