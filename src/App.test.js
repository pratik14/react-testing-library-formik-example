import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

it("should show validation on blur", async () => {
  const { getByLabelText, getByTestId } = render(<App />);

  const input = getByLabelText("Email");
  fireEvent.blur(input);

  await wait(() => {
    expect(getByTestId("emailError")).not.toBe(null);
    expect(getByTestId("emailError")).toHaveTextContent("Required");
  });
});
