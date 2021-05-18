import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from './Dashboard';
import reducer from '../../http/user/dashboardReducer';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
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
});