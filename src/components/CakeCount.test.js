import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '.././store/cake/store'

import CakeCount from "./CakeCount";
const Wrapper = ({children}) => (<Provider store={store}>{children}</Provider>)

test("renders CakeCount Component", () => {
  render(
    <Wrapper>
      <CakeCount />
    </Wrapper>
  );
  const headiingElement = screen.getByText(/Cake Count/i);
  expect(headiingElement).toBeInTheDocument();

  const buttonsList = screen.getAllByRole("button");

  expect(buttonsList[0].innerHTML).toContain("buy cake");
  expect(buttonsList[1].innerHTML).toContain("stock cake");
});
