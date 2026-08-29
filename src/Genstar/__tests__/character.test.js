import { character as createCharacter } from "../components/character";

it("should equal hello", () => {
  const hello = "hello";
  expect(hello).toEqual("hello");
});

test("it should create a new Character", () => {
  const character = createCharacter({
    attributes: ["funny", "smart"],
    givenName: "Mary",
    familyName: "Smith",
    idx: 0,
  });
  expect(character.attributes.length).toEqual(2);
  expect(character.givenName).toEqual("Mary");
  expect(character.familyName).toEqual("Smith");
  expect(character.image).not.toEqual(undefined);
  expect(character.idx).toEqual(0);
});
