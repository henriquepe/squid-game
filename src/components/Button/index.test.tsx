import { fireEvent, render } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  const mockProps = {
    title: "Teste",
    onClick: jest.fn(),
  };

  it("should render correctly", () => {
    const root = render(<Button {...mockProps} />);
    expect(root).toBeTruthy();
  });

  it("should render title correctly", () => {
    const { getByText } = render(<Button {...mockProps} />);
    expect(getByText(mockProps.title)).toBeTruthy();
  });

  it("should call onClick when clicked", () => {
    const { getByText } = render(<Button {...mockProps} />);
    fireEvent.click(getByText(mockProps.title));
    expect(mockProps.onClick).toHaveBeenCalled();
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
