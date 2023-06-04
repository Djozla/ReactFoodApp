import { render, screen } from "@testing-library/react";
<<<<<<< HEAD
import userEvent from "@testing-library/user-event";
=======
>>>>>>> 8831f51234b89c5903511b5fc542b3d14fb260ea
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

<<<<<<< HEAD
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
=======
  test("state change on btn click Change Text", () => {
    render(<Greeting />);

    const stateChangeElement = screen.getByAltText("Change");
    expect(stateChangeElement).toBeInTheDocument();
  });

  test("state didnt change on btn click Change Text", () => {
    render(<Greeting />);

    const stateChangeElement = screen.getByAltText("Its good to see you!");
    expect(stateChangeElement).toBeInTheDocument();
>>>>>>> 8831f51234b89c5903511b5fc542b3d14fb260ea
  });
});
