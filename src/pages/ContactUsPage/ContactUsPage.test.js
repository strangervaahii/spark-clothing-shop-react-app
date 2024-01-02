// import React and testing functions from the React Testing Library
import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
// import the component to be tested
import ContactUsPage from './ContactUsPage';

// describe the tests for the ContactUsPage component
describe('ContactUsPage', () => {
  // test to check if ContactAddress and GetInTouch components are rendered
  it('should render ContactAddress and GetInTouch components', () => {
    // render the ContactUsPage component
    render(<HashRouter><ContactUsPage /></HashRouter>);
    // find the ContactAddress and GetInTouch components by data-testid
    const contactAddress = screen.getByTestId('contactAddress');
    const getInTouch = screen.getByTestId('getInTouch');

    // expect the ContactAddress and GetInTouch components to be in the document
    expect(contactAddress).toBeInTheDocument();
    expect(getInTouch).toBeInTheDocument();
  });
});
