import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Users from './Users';
import reducer from '../../http/user/userReducer';
import { BrowserRouter } from "react-router-dom";

const mockUser= [
    {
        id: 1,
        role: "ADMIN",  
        email: "admin@gmail.com",
    },
    {
        id: 2,
        role: "USER",  
        email: "user@gmail.com",
    },
]

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
      ...render(
          <BrowserRouter>
              <Provider store={store}>
                  {component}
              </Provider>
          </BrowserRouter >),
    store,
  };
};

describe('Users should', () => {
    it('render', () => {
        const { container } = renderWithRedux(<Users />);
        expect(container).toBeInTheDocument();
    });
    it('return users array', () => {
        const { getAllByRole } = renderWithRedux(<Users getUsers={mockUser} />);
        expect(getAllByRole('link').length).toBe(2);
    });
});