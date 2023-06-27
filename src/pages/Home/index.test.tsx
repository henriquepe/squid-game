import { render } from "@testing-library/react";
import { HomePage } from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home", () => {
  it("should be able to render Home", () => {
    const root = render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(root).toBeTruthy();
  });

  it("shoud display game logo", () => {
    const { getByTestId } = render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(getByTestId("gameLogo")).toBeTruthy();
  });

  it("should display button to init game", () => {
    const { getByTestId } = render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(getByTestId("buttonContainer")).toBeTruthy();
  });
});
