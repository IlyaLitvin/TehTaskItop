import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Profiles from './Profiles';
import reducer from '../../http/profiles/profilesReducer';

const mockProfiles = [
    {
        id: 1,
        name: "Pedro",
        gender: "Male",
        birthdate: "12.05.2020",
        city: "Kiev"    
    },
]

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Profiles should", () => {
    it("render", () => {
        const { container } = renderWithRedux(<Profiles />);
        expect(container).toBeInTheDocument();
    });
    it('return profiles array', () => {
        const { getByText } = renderWithRedux(<Profiles
            getProfiles={mockProfiles}
        />);
        expect(getByText("Pedro")).toBeInTheDocument();
    });
    it('handleclick btn', () => {
        const { getByText } = renderWithRedux(
            <Profiles
            getProfiles = {mockProfiles} 
            setModalVisible={jest.fn()}
            deleteProfile={jest.fn()}
        />);
        const editBtn = getByText('edit');        
        userEvent.click(editBtn);
        const deleteBtn = getByText('delete');
        userEvent.click(deleteBtn);
        const addBtn = getByText('+');
        userEvent.click(addBtn);        
    });    
});

