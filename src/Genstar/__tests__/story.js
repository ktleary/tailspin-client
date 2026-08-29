import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Story from "../components/story";
import StoryCharacter from "../components/story-character";

test("it should render StoryCharacter", () => {
  const character = {attributes: ["even-keeled", "agreeable"]};
  const handleCharacter = jest.fn();
  const handleRemoveCharacter = jest.fn();
  const options = { showFamily: true, showSetting: false };
  const idx = 0;
  render(
    <StoryCharacter
      character={character}
      key={`character-${idx}`}
      handleCharacter={handleCharacter}
      handleRemoveCharacter={handleRemoveCharacter}
      showFamily={options.showFamily}
      idx={idx}
    />
  );
  expect(screen.getByText("even-keeled")).toBeInTheDocument();
});

test("generate is enabled without a demo password", async () => {
  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ story: "Once upon a time." }),
  });
  globalThis.fetch = fetchMock;

  render(<Story />);

  expect(screen.queryByText(/Enter demo password/i)).not.toBeInTheDocument();
  expect(screen.queryByPlaceholderText(/Credentials/i)).not.toBeInTheDocument();

  const send = screen.getByRole("button", { name: /send/i });
  expect(send).toBeEnabled();
  fireEvent.click(send);

  await waitFor(() => {
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  const [url, options] = fetchMock.mock.calls[0];
  expect(url).toMatch(/\/api\/v1\/create-story$/);
  expect(options.method).toBe("POST");
  expect(options.headers["x-credentials"]).toBeUndefined();
  expect(JSON.parse(options.body)).toHaveProperty("story");
  expect(await screen.findByText("Once upon a time.")).toBeInTheDocument();
});

test("generate collapses the prompt card and expands pickers back", async () => {
  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      story: "# The Last Lantern\n\n**A storm, a secret.**\n\nOnce upon a time.",
    }),
  });
  globalThis.fetch = fetchMock;

  render(<Story />);

  expect(screen.getByText("Tone")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /send/i }));

  expect(await screen.findByRole("heading", { name: "The Last Lantern" })).toBeInTheDocument();
  expect(screen.queryByText("# The Last Lantern")).not.toBeInTheDocument();
  expect(screen.getByText("A storm, a secret.")).toBeInTheDocument();
  expect(screen.getByText("A storm, a secret.").tagName).toBe("STRONG");
  expect(screen.queryByText("Tone")).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: /expand pickers/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /download story/i })).toBeInTheDocument();
  expect(screen.queryByLabelText("progress-bar-loading")).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /expand pickers/i }));
  expect(screen.getByText("Tone")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "The Last Lantern" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /download story/i })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /collapse pickers/i }));
  expect(screen.queryByText("Tone")).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: /download story/i })).toBeInTheDocument();
});

test("progress bar stays on the collapsed card until text arrives", async () => {
  let resolveFetch;
  const fetchMock = vi.fn().mockReturnValue(
    new Promise((resolve) => {
      resolveFetch = resolve;
    })
  );
  globalThis.fetch = fetchMock;

  render(<Story />);
  fireEvent.click(screen.getByRole("button", { name: /send/i }));

  expect(await screen.findByLabelText("progress-bar-loading")).toBeInTheDocument();
  expect(screen.queryByText("Tone")).not.toBeInTheDocument();
  expect(screen.queryByText("Creating your story...")).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: /expand pickers/i })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: /download story/i })).not.toBeInTheDocument();

  resolveFetch({
    ok: true,
    json: async () => ({ story: "Once upon a time." }),
  });

  expect(await screen.findByText("Once upon a time.")).toBeInTheDocument();
  expect(screen.queryByLabelText("progress-bar-loading")).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: /download story/i })).toBeInTheDocument();
});

test("download is hidden until a story exists and then saves the markdown", async () => {
  const fetchMock = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      story: "# The Last Lantern\n\n**A storm, a secret.**\n\nOnce upon a time.",
    }),
  });
  globalThis.fetch = fetchMock;

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

  render(<Story />);

  expect(screen.queryByRole("button", { name: /download story/i })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /send/i }));

  const download = await screen.findByRole("button", { name: /download story/i });
  fireEvent.click(download);

  expect(createObjectURL).toHaveBeenCalledTimes(1);
  const blob = createObjectURL.mock.calls[0][0];
  expect(blob).toBeInstanceOf(Blob);
  expect(click.mock.instances[0].download).toEqual("the-last-lantern.md");
  expect(revokeObjectURL).toHaveBeenCalledWith("blob:mock-story");
});

