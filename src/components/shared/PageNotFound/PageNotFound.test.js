import React from 'react'; // Importing React library
import { render } from '@testing-library/react'; // Importing React library
import PageNotFound from './PageNotFound';// Importing the PageNotFound component
import { HashRouter } from 'react-router-dom'; // Importing HashRouter from react-router-dom library

// Describing a test suite for the PageNotFound component
describe('PageNotFound', () => {
  // Describing a test case to check if the correct error message is rendered
  it('renders the correct error message', () => {
    const { getByText } = render(<HashRouter><PageNotFound /></HashRouter>);
    expect(getByText('404 Error')).toBeInTheDocument();
    expect(getByText('The requested URL was not found on this server.')).toBeInTheDocument();
  });

  // Describing a test case to check if the image is rendered with the correct alt text
  it('renders an image with the correct alt text', () => {
    const { getByAltText } = render(<HashRouter><PageNotFound /></HashRouter>);
    expect(getByAltText('ErrorImage')).toBeInTheDocument();
  });

  // Describing a test case to check if a button to go back to home page is rendered
  it('renders a button to go back to home page', () => {
    const { getByRole } = render(<HashRouter><PageNotFound /></HashRouter>);
    expect(getByRole('button')).toHaveTextContent('Go to Home');
  });
});
