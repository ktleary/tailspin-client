import Character from "../components/character";
import ProfileImage from "../components/profile-image";

it("should equal hello", () => {
  const hello = "hello";
  expect(hello).toEqual("hello");
});

test("it should create a new Character", () => {
  const character = new Character({
    attributes: ["funny", "smart"],
    givenName: "Mary",
    familyName: "Smith",
    image: <ProfileImage />,
    idx: 0,
  });
  expect(character.attributes.length).toEqual(2);
  expect(character.givenName).toEqual("Mary");
  expect(character.familyName).toEqual("Smith");
  expect(character.image).not.toEqual(undefined);
  expect(character.idx).toEqual(0);
});
