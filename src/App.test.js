import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import dict from "./dict";

it("renders without crashing", () => {
  render(<App />);
  expect(screen.getByTestId(dict.testid.app))
});
