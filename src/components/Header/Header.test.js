// Import React, testing libraries, Header component, and HashRouter
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { HashRouter } from 'react-router-dom';

// Define a test suite for the Header component
describe('Header', () => {
  // Test the logo and shop name
  it('renders the logo and shop name', () => {
    // Render the Header component within a HashRouter component
    render(<HashRouter><Header /></HashRouter>);
    const logo = screen.getByAltText('logo');
    const shopName = screen.getByText('Spark Clothing Shop');
    expect(logo).toBeInTheDocument();
    expect(shopName).toBeInTheDocument();
  });

  // Test the search input
  it('renders the search input', () => {
    render(<HashRouter><Header /></HashRouter>);
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });
});
