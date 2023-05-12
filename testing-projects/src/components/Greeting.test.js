import { render, screen } from "@testing-library/react";
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

  test("state change on btn click Change Text", () => {
    render(<Greeting />);

    const stateChangeElement = screen.getByAltText("Change");
    expect(stateChangeElement).toBeInTheDocument();
  });

  test("state didnt change on btn click Change Text", () => {
    render(<Greeting />);

    const stateChangeElement = screen.getByAltText("Its good to see you!");
    expect(stateChangeElement).toBeInTheDocument();
  });
});
