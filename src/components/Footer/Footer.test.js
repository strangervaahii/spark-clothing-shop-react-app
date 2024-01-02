// Import React, testing libraries, Footer component, and HashRouter
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { HashRouter } from 'react-router-dom';

// Define a test suite for the Footer component
describe('Footer component', () => {
  // Test that social media icons are rendered
  it('renders social media icons', () => {
    // Render the Footer component within a HashRouter component
    render(<HashRouter><Footer /></HashRouter>);
    // Get the social media icons by their data-testid attributes
    const facebookIcon = screen.getByTestId('facebookIcon');
    const twitterIcon = screen.getByTestId('twitterIcon');
    const instagramIcon = screen.getByTestId('instagramIcon');
    const whatsappIcon = screen.getByTestId('whatsappIcon');
    // Check that each social media icon is in the document
    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(whatsappIcon).toBeInTheDocument();
  });

  // Test that copyright and developer name are rendered
  it('renders copyright and developer name', () => {
    // Define the developer name and current year
    const developerName = 'Spark Clothing Shop';
    const currentYear = new Date().getFullYear();
    // Render the Footer component
    render(<HashRouter><Footer /></HashRouter>);
    // Get the copyright and developer name elements by their text content
    const copyRight = screen.getByText(`©Copyright ${currentYear}`);
    const developer = screen.getByText(developerName);
    // Check that the copyright and developer name are in the document
    expect(copyRight).toBeInTheDocument();
    expect(developer).toBeInTheDocument();
  });
});
