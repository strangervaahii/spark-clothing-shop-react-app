// importing required libraries
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Comments from './Comments';

// importing required libraries
describe('Comments', () => {
  it('renders comment list', async () => {
    // setting up fake comments
    const fakeComments = [
      { id: 1, name: 'virat', message: 'Eee saala cup namadhe' },
      { id: 2, name: 'dhoni', message: 'CSK' }
    ];

    // mocking fetch API response
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
      const response = {
        json: () => Promise.resolve(fakeComments)
      };
      return Promise.resolve(response);
    });

    // rendering the component
    render(<Comments />);

    // waiting for the component to load
    await waitFor(() => {
      // getting all comment elements
      const commentList = screen.getAllByTestId('comment');
      // assertion
      expect(commentList).toHaveLength(fakeComments.length);
      commentList.forEach((comment, index) => {
        expect(comment).toHaveTextContent(fakeComments[index].name);
        expect(comment).toHaveTextContent(fakeComments[index].message);
      });
    });

    // restoring mocked fetch API response
    window.fetch.mockRestore();
  });
});
