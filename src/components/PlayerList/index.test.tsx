import { render } from "@testing-library/react";
import { PlayerList } from ".";

describe("PlayerList", () => {
  const mockProps = {
    players: [
      {
        id: 1,
        name: "Henrique Pires",
        award: "420.000,00",
        avatar:
          "https://avatars.githubusercontent.com/u/62850277?s=400&u=4e0b6cba601b5c9a40a8854edeb02c385f094ea1&v=4",
        eliminated: false,
      },
    ],
    showEliminated: false,
  };

  it("should render correctly", () => {
    const root = render(<PlayerList {...mockProps} />);
    expect(root).toBeTruthy();
  });

  it("should render the player list", () => {
    const { getByTestId } = render(<PlayerList {...mockProps} />);
    const playerList = getByTestId("playerList");
    expect(playerList).toBeTruthy();
  });

  it("should render the player card", () => {
    const { getByTestId } = render(<PlayerList {...mockProps} />);
    const playerCard = getByTestId("playerCard");
    expect(playerCard).toBeTruthy();
  });

  it("should not render the player list if there is no players", () => {
    const { queryByTestId } = render(
      <PlayerList showEliminated={false} players={undefined} />
    );
    const playerList = queryByTestId("playerList");
    expect(playerList).toBeFalsy();
  });

  it("should show players quantity", () => {
    const { getByTestId } = render(<PlayerList {...mockProps} />);
    const playerList = getByTestId("headerListQuantity");
    expect(playerList).toBeTruthy();
    expect(playerList.lastChild.textContent).toBe("1/1");
  });

  it("should show players quantity with eliminated players", () => {
    const { getByTestId } = render(
      <PlayerList {...mockProps} showEliminated />
    );
    const playerList = getByTestId("headerListQuantity");
    expect(playerList).toBeTruthy();
    expect(playerList.lastChild.textContent).toBe("0/1");
  });

  it('should display "Participantes Eliminados" if showEliminated is true', () => {
    const { queryByText } = render(
      <PlayerList {...mockProps} showEliminated />
    );
    expect(queryByText("Participantes Eliminados")).toBeTruthy();
    expect(queryByText("Participantes")).toBeFalsy();
  });

  it('should display "Participantes" if showEliminated is false', () => {
    const { queryByText } = render(<PlayerList {...mockProps} />);
    expect(queryByText("Participantes")).toBeTruthy();
    expect(queryByText("Participantes Eliminados")).toBeFalsy();
  });
});
