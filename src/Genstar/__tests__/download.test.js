import { downloadStoryMarkdown } from "../util/download";

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

test("downloadStoryMarkdown writes a blob, clicks <a download>, and revokes the URL", () => {
  const createObjectURL = vi.fn(() => "blob:mock-story");
  const revokeObjectURL = vi.fn();
  vi.stubGlobal("URL", { createObjectURL, revokeObjectURL });

  const click = vi.fn();
  const originalCreateElement = document.createElement.bind(document);
  vi.spyOn(document, "createElement").mockImplementation((tag) => {
    const element = originalCreateElement(tag);
    if (tag === "a") {
      element.click = click;
    }
    return element;
  });

  const markdown = "# The Last Lantern\n\nOnce upon a time.";
  downloadStoryMarkdown(markdown);

  expect(createObjectURL).toHaveBeenCalledTimes(1);
  const blob = createObjectURL.mock.calls[0][0];
  expect(blob).toBeInstanceOf(Blob);
  expect(blob.type).toEqual("text/markdown;charset=utf-8");
  expect(blob.size).toEqual(new Blob([markdown]).size);

  expect(click).toHaveBeenCalledTimes(1);
  const link = click.mock.instances[0];
  expect(link.download).toEqual("the-last-lantern.md");
  expect(link.href).toEqual("blob:mock-story");
  expect(revokeObjectURL).toHaveBeenCalledWith("blob:mock-story");
});

test("downloadStoryMarkdown names untitled stories story.md", () => {
  const createObjectURL = vi.fn(() => "blob:mock-story");
  vi.stubGlobal("URL", { createObjectURL, revokeObjectURL: vi.fn() });

  const click = vi.fn();
  const originalCreateElement = document.createElement.bind(document);
  vi.spyOn(document, "createElement").mockImplementation((tag) => {
    const element = originalCreateElement(tag);
    if (tag === "a") {
      element.click = click;
    }
    return element;
  });

  downloadStoryMarkdown("Once upon a time.");

  expect(click.mock.instances[0].download).toEqual("story.md");
});
