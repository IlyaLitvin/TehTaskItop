import React from 'react';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { render, act } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import NavBar from '../components/NavBar';
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

const mockHistoryPush = jest.fn();
 
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));



describe('Navbar should', () => {
    it('render', () => {
        const { container } = renderWithRedux(<NavBar />, {initialState: {user:{role: "ADMIN"}}} );
        expect(container).toBeInTheDocument();
    });
    it('logout',  () => {
    const { getByText } = renderWithRedux(<NavBar />, {initialState: {user:{role: "ADMIN", isAuth: true}}});
    const logOutBtn = getByText(/Log out/i);    
    userEvent.click(logOutBtn, {
        initialState: {
            user: { isAuth: false }
        },
    });
    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenCalledWith("/login");
    });
    it('history buttons', () => {
        const { getByText } = renderWithRedux(<NavBar />, { initialState: { user: { role: "ADMIN" } } });
        const profilesBtn = getByText(/Profiles/i);
        userEvent.click(profilesBtn);
        expect(mockHistoryPush).toHaveBeenCalledWith("/profiles");
        const dashboardBtn = getByText('Dashboard');
        userEvent.click(dashboardBtn);
        expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
        const usersBtn = getByText('Users');
        userEvent.click(usersBtn);
        expect(mockHistoryPush).toHaveBeenCalledWith("/users");
    });
    it('user btn', () => {
        const { getByText } = renderWithRedux(<NavBar />, { initialState: { user: { role: "USER" } } });
        const profilesBtn = getByText(/Profiles/i);
        userEvent.click(profilesBtn);
        expect(mockHistoryPush).toHaveBeenCalledWith("/profiles");
    });
});