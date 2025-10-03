import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact US Page Test Cases", () => {
  beforeAll(() => {
    // console.log("Before All");
  });

  beforeEach(() => {
    // console.log("Before Each");
  });

  afterAll(() => {
    // console.log("after All");
  });

  afterEach(() => {
    // console.log("after Each");
  });

  test("should load button inside Contact component", () => {
    render(<Contact />);
    //    const button = screen.getByRole('button');
    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside Contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes inside Contact component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);
    //Assertion
    expect(inputBoxes.length).toBe(2);

    expect(inputBoxes.length).not.toBe(3);
  });
});
