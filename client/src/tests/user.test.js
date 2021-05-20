import React from "react";
import { createStore , applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import User from '../pages/User/User';
import reducer from '../http/user/userReducer';
import thunk from 'redux-thunk';

const enchaser = applyMiddleware(thunk);

const mockUser = {
    id: 1,
    role: "ADMIN",
    email: "admin@gmail.com",
};


const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState, enchaser) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('User should', () => {
    it('render', () => {
        const { container } = renderWithRedux(<User />);
        expect(container).toBeInTheDocument();
    });
    it('return user', () => {
        const { getByText } = renderWithRedux(<User user = {mockUser} />);
        expect(getByText("admin@gmail.com")).toBeInTheDocument();
    });
    it('handleclick btn', () => {
        const { getByText } = renderWithRedux(
            <User
            user = {mockUser} 
            setModalVisible={jest.fn()}
            deleteUser={jest.fn()}
        />);
        const editBtn = getByText('edit');        
        userEvent.click(editBtn);
        const deleteBtn = getByText('delete');
        userEvent.click(deleteBtn);    
    }); 
});