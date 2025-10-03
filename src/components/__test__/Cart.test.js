import { act, fireEvent } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart"
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
        <RestaurantMenu />
        <Cart/>
      </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Cheese Burst - 3 New Flavours(10)");
  fireEvent.click(accordianHeader);
  
  expect(screen.getAllByTestId("fooditems").length).toBe(10)

  expect(screen.getByText("Cart -(0 Items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button",{name:"Add +"});
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart -(1 Items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);

   expect(screen.getByText("Cart -(2 Items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("fooditems").length).toBe(12);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
     expect(screen.getAllByTestId("fooditems").length).toBe(10);
     expect(screen.getByText("Cart is empty, Add Items to the Cart !")).toBeInTheDocument();
});
