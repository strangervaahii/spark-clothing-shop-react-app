// Import necessary functions from the testing library and the component being tested
import { fireEvent, render } from '@testing-library/react';
import Review from './Review';

// Begin test suite for the Review component
describe('Review', () => {
  // Test that a button with the correct text is rendered
  it('renders a button with correct text', () => {
    const { getByText } = render(<Review />);
    // Assert that the button with the text 'Write a Review' is in the document
    expect(getByText('Write a Review')).toBeInTheDocument();
  });

  // Test that the modal is shown when the button is clicked
  it('shows the modal when the button is clicked', () => {
    const { getByText, getByRole } = render(<Review />);
    const button = getByText('Write a Review');
    // Simulate a click on the button
    fireEvent.click(button);
    const modal = getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  // Test that the modal is closed when the close button is clicked
  it('closes the modal when the close button is clicked', () => {
    const { getByText } = render(<Review />);
    const button = getByText('Write a Review');
    fireEvent.click(button);
    const closeButton = getByText('Close');
    fireEvent.click(closeButton);
  });

  // Test that the name field is checked
  it('checks the name', () => {
    const { getByText } = render(<Review />);
    const button = getByText('Write a Review');
    fireEvent.click(button);
    const nameLabel = getByText('Enter Your Name');
    fireEvent.click(nameLabel);
  });

  // Test that the email field is checked
  it('checks the email', () => {
    const { getByText } = render(<Review />);
    const button = getByText('Write a Review');
    fireEvent.click(button);
    const emailLabel = getByText('Email address');
    fireEvent.click(emailLabel);
  });

  // Test that the phone number field is checked
  it('checks the phone number', () => {
    const { getByText } = render(<Review />);
    const button = getByText('Write a Review');
    fireEvent.click(button);
    const phoneLabel = getByText('Phone number');
    fireEvent.click(phoneLabel);
  });
});
