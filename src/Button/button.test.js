import React from "react";

import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

import Button from "./index";

const BUTTON_ID = "onClickButton";

describe("Button", () => {
  it("Basic html", () => {
    const component = renderer.create(
      <Button label={"hello"} onClick={() => {}} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("onClick callback", () => {
    const fakeCallback = jest.fn();

    const { getByTestId, rerender } = render(<Button onClick={fakeCallback} />);

    fireEvent.click(getByTestId(BUTTON_ID));

    expect(fakeCallback).toHaveBeenCalledTimes(1);
  });
});
