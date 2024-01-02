// import React and the render function from the React Testing Library
import React from 'react';
import { render } from '@testing-library/react';
// import the component to be tested - AAA procedure
import History from './History';

// describe the tests for the History component
describe('History component', () => {
  // test to check if the history content is rendered correctly
  it('renders the history content', () => {
    // render the component
    const { getByText } = render(<History />);

    // find the history title element by text
    const historyTitle = getByText(/HISTORY/i);

    // find the history text element by text
    const historyText = getByText(/The story of Spark Clothings started in Bangalore/i); // i - case-insenstive

    // expect the history title and text to be in the document
    expect(historyTitle).toBeInTheDocument();
    expect(historyText).toBeInTheDocument();
  });
});
