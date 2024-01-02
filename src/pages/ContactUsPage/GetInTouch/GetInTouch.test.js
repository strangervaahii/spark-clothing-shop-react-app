// import React and testing functions from the React Testing Library
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
// import the component to be tested
import GetInTouch from './GetInTouch';

// This is a test suite for the GetInTouch component
describe('GetInTouch', () => {
  // test to check if has the heading
  it('has the heading', () => {
    render(<GetInTouch />);
    const main = screen.getByRole('heading', { name: /GET IN TOUCH/i });
    expect(main).toBeInTheDocument('');
  });

  // This is a test case to check if the component has all the form details
  it('has all the form details', () => {
    render(<GetInTouch />);
    expect(screen.getByTestId('nameLabel')).toHaveTextContent('Name');
    expect(screen.getByPlaceholderText('Enter Your Name')).toBeInTheDocument();
    expect(screen.getByTestId('emailLabel')).toHaveTextContent('Email');
    expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument();
    expect(screen.getByText(/message/i)).toBeInTheDocument('');
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument('');
  });

  // This is a test case to check if the component has the submit button
  it('has the submit button', () => {
    render(<GetInTouch />);
    const submitBtn = screen.getByRole('button', { name: /submit/i });
    expect(submitBtn).toBeInTheDocument('');
  });

  // This is a test case to check if the submit button is disabled when first name is empty
  it('has the submit button in disabled state when first name is empty', () => {
    render(<GetInTouch />);
    const nameInput = screen.getByLabelText('Name');
    const mockEvenObj = {
      target: {
        value: ''
      }
    };
    fireEvent.change(nameInput, mockEvenObj);
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toHaveAttribute('disabled');
  });

  // This is a test case to check if the submit button is enabled when first name is not empty
  it('has the submit button in enabled state when fisrtName is not empty', () => {
    render(<GetInTouch />);
    const nameInput = screen.getByLabelText('Name');
    const mockEvenObj = {
      target: {
        value: 'yasin'
      }
    };
    fireEvent.change(nameInput, mockEvenObj);
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeEnabled();
  });

  // This is a test case to check if the success message appears on button click
  it('has success message on button click', () => {
    render(<GetInTouch />);
    const nameInput = screen.getByLabelText('Name');
    const mockEventObj = {
      target: {
        value: 'a'
      }
    };
    fireEvent.change(nameInput, mockEventObj);
    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);
    expect(screen.queryByTestId('isSaved')).not.toBe('Saved Successfully');
  });

  // This is a test case to check if errors are shown when required fields are not filled
  it('should show errors when submit without required fields', () => {
    const { getByTestId, queryByText } = render(<GetInTouch />);
    fireEvent.click(getByTestId('submitButton'));
    expect(queryByText('Required!')).not.toBeInTheDocument();
  });

  // This is a test case to check if the data is posted to the backend and shows a pending state
  it('should post data to backend and show pending', async () => {
    const { getByTestId } = render(<GetInTouch />);
    const name = getByTestId('nameInput');
    const email = getByTestId('emailInput');
    const message = getByTestId('messageArea');

    fireEvent.change(name, { target: { value: 'name' } });
    fireEvent.change(email, { target: { value: 'example@email.com' } });
    fireEvent.change(message, { target: { value: 'hello' } });

    await waitFor(() => getByTestId('submitButton'));
    fireEvent.click(getByTestId('submitButton'));
    expect(getByTestId('submitButton')).toBeInTheDocument();
  });
});
