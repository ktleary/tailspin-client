import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	render(<App />);
	const title = screen.getByText(/Genstar/i);
	expect(title).toBeInTheDocument();
});
