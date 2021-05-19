import React from 'react';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ProfilesModal from './ProfilesModal'
import reducer from '../http/auth/authReducer';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

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

const mockProfile = {
    name: "Pedro",
    gender: "Male",
    birthdate: "12.05.2020",
    city: "Kiev" 
};

describe('Modal should', () => {
    it('render', () => {
        const { container } = renderWithRedux(<ProfilesModal isModalOpen={jest.fn()} modalVisible={jest.fn()}  />);
        expect(container).toBeInTheDocument();
    });
    it('sumbit form', () => {
        const onSubmit = jest.fn();
        const inputValue = "";
        const { getByLabelText } = renderWithRedux(<ProfilesModal onSubmit={onSubmit} isModalOpen={jest.fn()} modalVisible={jest.fn()}  />);
        fireEvent.change(getByLabelText("Name:"), { target: { value: inputValue } });
    });
});