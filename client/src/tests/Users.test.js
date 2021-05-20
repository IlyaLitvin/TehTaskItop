import React from "react";
import { createStore , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Users from '../pages/Users/Users';
import UsersLogic from '../pages/Users/UsersLogic'
import reducer from '../http/user/userReducer';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';

const enchaser = applyMiddleware(thunk);

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
  { initialState, store = createStore(reducer, initialState, enchaser) } = {}
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
    it('render', () => {
        const { container } = renderWithRedux(<UsersLogic />, { initialState: { user: { token: "ADMIN" } } });
        expect(container).toBeInTheDocument();
    });
    it('return users array', () => {
        const { getAllByRole } = renderWithRedux(<Users getUsers={mockUser} />);
        expect(getAllByRole('link').length).toBe(2);
    });
});