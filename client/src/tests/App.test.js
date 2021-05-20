import React from 'react';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import reducer from '../http/auth/authReducer';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from '../App';

const enchaser = applyMiddleware(thunk);

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
        </BrowserRouter>),
      
    store,
  };
};

const mockHistoryPush = jest.fn();
 
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

const mockInfo = {
  email: "admin@gmail.com",
  password: "admin",
};

describe('Registration page should', () => {
  it('render', () => {
    const { container } = renderWithRedux(<App />, {initialState: {user:{role: "ADMIN", isAuth: true}}});
    expect(container).toBeInTheDocument();
  });
});