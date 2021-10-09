import { render, screen } from "@testing-library/react";

import CakeCount from "./CakeCount";

test("renders CakeCount Component", () => {
  render(<CakeCount />);
  const headiingElement = screen.getByText(/Cake Count/i);
  expect(headiingElement).toBeInTheDocument();

  const countButton = screen.getByRole("button");
  expect(countButton.innerHTML).toContain("buy cake");
});
