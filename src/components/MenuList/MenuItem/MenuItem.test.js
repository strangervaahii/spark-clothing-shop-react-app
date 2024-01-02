// Importing the required modules and components
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuItem from './MenuItem';

// Defining a test suite for the MenuItem component
describe('MenuItem', () => {
  // Defining a test case for rendering the menu item with the correct title and URL
  it('renders the menu item with the correct title and URL', () => {
    // Defining the URL and title for the menu item
    const url = '/path';
    const title = 'title';
    // Rendering the MenuItem component within a MemoryRouter
    render(
      <MemoryRouter>
        <MenuItem url={url} title={title} />
      </MemoryRouter>
    );

    // Checking that the rendered link element has the expected href and text content
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', url);
    expect(linkElement).toHaveTextContent(title);
  });
});
