import React from 'react';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Login from '../pages/Login/Login';
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

// const mockHistoryPush = jest.fn();
 
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useHistory: () => ({
//         push: mockHistoryPush,
//     }),
// }));

const mockInfo = {
  email: "admin@gmail.com",
  password: "admin",
};
const setup = () => {
  const utils = renderWithRedux(<Login />);
  const input = utils.getByLabelText('email-input');
  return {
    input,
    ...utils,
  };
};


describe('Login page should', () => {
  it('render', () => {
    const { container } = renderWithRedux(<Login />);
    expect(container).toBeInTheDocument();
  });
  // it('handle submit', () => {
  //   const {  getAllByRole } = renderWithRedux(<Login />);
  //   const button = getAllByRole('button');
  //   expect(button[0]).toBeInTheDocument();
  //   userEvent.click(button[0]);
  //   expect(mockHistoryPush).toHaveBeenCalledWith('/profiles');
  // });
  // it("submit form", async () => {
  //   const handleSubmit = jest.fn();
  //   renderWithRedux(<Login onSubmit={handleSubmit} />);
  //   await waitFor(() => {
  //     fireEvent.change(
  //     screen.getAllByRole('textbox')[0],
  //     { target: { value: mockInfo.email } },
  //     );
  //     fireEvent.submit(screen.findByText(/Sign In/i)).toHaveBeenCalled();
  //   });
  // });
  // it('change', () => {
  //   const { input } = setup();
  //   act(() => {
  //     fireEvent.change(input, { target: { value: 'admin@gmail.com' } });
  //   });
  //   expect(input.value).toBe('admin@gmail.com');
  // });
});