import { render } from "@testing-library/react";
import { PlayerCard } from ".";

describe("PlayerCard", () => {
  const mockProps = {
    name: "Henrique Pires",
    award: "420.000,00",
    avatar:
      "https://avatars.githubusercontent.com/u/62850277?s=400&u=4e0b6cba601b5c9a40a8854edeb02c385f094ea1&v=4",
  };

  it("should render correctly", () => {
    const root = render(<PlayerCard {...mockProps} />);
    expect(root).toBeTruthy();
  });

  it("should display player name", () => {
    const { getByText } = render(<PlayerCard {...mockProps} />);
    expect(getByText(mockProps.name)).toBeTruthy();
  });

  it("should display player award", () => {
    const { getByText } = render(<PlayerCard {...mockProps} />);
    expect(getByText(`R$ ${mockProps.award}`)).toBeTruthy();
  });

  it("should display player avatar", () => {
    const { getByTestId } = render(<PlayerCard {...mockProps} />);
    const avatar = getByTestId("playerAvatar");
    expect(avatar).toBeTruthy();
    expect(avatar.getAttribute("src")).toBe(mockProps.avatar);
  });
});
