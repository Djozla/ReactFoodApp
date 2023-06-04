import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello world");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("Its good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button WAS clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.getByText("Changed");
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render "Its good to see you!" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("Its good to see you!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
