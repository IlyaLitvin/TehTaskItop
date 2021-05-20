import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from '../pages/Dashboard/Dashboard';
import DashboardLogic from '../pages/Dashboard/DashboardLogic'
import reducer from '../http/user/dashboardReducer';
import thunk from 'redux-thunk';

const enchaser = applyMiddleware(thunk);

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState, enchaser) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('Dashboard should', () => {
    it('render', () => {
        const { container } = renderWithRedux(<Dashboard />);
        expect(container).toBeInTheDocument();
    });
    it('render', () => {
        const { container } = renderWithRedux(<DashboardLogic />, { initialState: { user: { token: "ADMIN" } } });
        expect(container).toBeInTheDocument();
    });
});