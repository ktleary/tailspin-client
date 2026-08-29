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

  const send = screen.getByTitle("Send");
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

