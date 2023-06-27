import { render, screen, fireEvent } from "@testing-library/react";
import { GamePage } from "@pages/Game";
import { BrowserRouter as Router } from "react-router-dom";

describe("GamePage", () => {
  beforeEach(() => {
    render(
      <Router>
        <GamePage />
      </Router>
    );
  });

  it("renders game logo", () => {
    expect(screen.getByTestId("gameLogo")).toBeInTheDocument();
  });

  it("renders start round button initially", () => {
    expect(screen.getByText("Iniciar rodada")).toBeInTheDocument();
  });

  it("renders info cards", () => {
    expect(screen.getByText("Round")).toBeInTheDocument();
    expect(screen.getByText("Fundos do Prêmio")).toBeInTheDocument();
    expect(screen.getByText("Votos para o fim do jogo")).toBeInTheDocument();
  });

  it("renders player lists", () => {
    expect(screen.getAllByTestId("playerList").length).toEqual(2);
  });

  it("starts round when start button is clicked", () => {
    fireEvent.click(screen.getByText("Iniciar rodada"));
    expect(screen.getByText("Eliminando participantes")).toBeInTheDocument();
  });
});
