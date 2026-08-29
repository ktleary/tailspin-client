import {
  parseInline,
  parseStoryMarkdown,
  slugifyFilename,
  storyMarkdownFilename,
} from "../util/markdown";

test("parseInline turns **text** into strong parts", () => {
  expect(parseInline("A **kicker** line")).toEqual([
    { type: "text", value: "A " },
    { type: "strong", value: "kicker" },
    { type: "text", value: " line" },
  ]);
});

test("parseStoryMarkdown treats # as a title and skips blank lines", () => {
  const blocks = parseStoryMarkdown(
    "# The Last Lantern\n\n**A storm, a secret.**\n\nOnce upon a time."
  );

  expect(blocks).toEqual([
    {
      type: "heading",
      level: 1,
      children: [{ type: "text", value: "The Last Lantern" }],
    },
    {
      type: "paragraph",
      children: [{ type: "strong", value: "A storm, a secret." }],
    },
    {
      type: "paragraph",
      children: [{ type: "text", value: "Once upon a time." }],
    },
  ]);
});

test("parseStoryMarkdown leaves raw # in the middle of a line alone", () => {
  const blocks = parseStoryMarkdown("Call it #3 and move on.");
  expect(blocks[0]).toEqual({
    type: "paragraph",
    children: [{ type: "text", value: "Call it #3 and move on." }],
  });
});

test("slugifyFilename lowercases and hyphenates", () => {
  expect(slugifyFilename("The Last Lantern")).toEqual("the-last-lantern");
  expect(slugifyFilename("Hello, World!")).toEqual("hello-world");
  expect(slugifyFilename("  -- Already-Slugged --  ")).toEqual("already-slugged");
});

test("storyMarkdownFilename uses the first heading slug", () => {
  expect(
    storyMarkdownFilename("# The Last Lantern\n\nOnce upon a time.")
  ).toEqual("the-last-lantern.md");
  expect(storyMarkdownFilename("## Hello, World!\n\nBody.")).toEqual(
    "hello-world.md"
  );
});

test("storyMarkdownFilename falls back to story.md", () => {
  expect(storyMarkdownFilename("Once upon a time.")).toEqual("story.md");
  expect(storyMarkdownFilename("")).toEqual("story.md");
  expect(storyMarkdownFilename("#   ")).toEqual("story.md");
  expect(storyMarkdownFilename("# !!!")).toEqual("story.md");
});
