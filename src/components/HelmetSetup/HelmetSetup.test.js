// Import React, testing libraries, HelmetSetup component, and HashRouter
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import HelmetSetup from './HelmetSetup';
import { HashRouter } from 'react-router-dom';

// Define a test suite for the HelmetSetup component
it('should render the title', async () => {
  const title = 'Title';
  //  Render the HelmetSetup component within a HashRouter component
  render(<HashRouter><HelmetSetup title={title} /></HashRouter>);

  // Wait for the document title to be in the document
  await waitFor(() => expect(document.querySelector('title')).toBeInTheDocument());

  // Get the text content of the document title
  const helmetTitle = document.querySelector('title').textContent;

  // Expect the text content of the document title to be equal to the title prop passed to HelmetSetup
  expect(helmetTitle).toBe(title);
});
