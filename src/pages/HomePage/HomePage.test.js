// Import React and testing utilities
import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './HomePage'; // Import the component to be tested
import { HashRouter } from 'react-router-dom';

// Import the component to be tested
describe('HomePage', () => {
  // Test that the Free Shipping and Return card is rendered with the correct text
  it('renders the Free Shipping and Return card', () => {
    // Test that the Free Shipping and Return card is rendered with the correct text
    const { getByText } = render(<HashRouter><HomePage /></HashRouter>);
    expect(getByText('FREE SHIPPING & RETURN')).toBeInTheDocument();
    expect(getByText('Free Shipping on all order over Rs.499')).toBeInTheDocument();
  });

  // Test that the Money Back and Guarantee card is rendered with the correct text
  it('renders the Money Back and Guarantee card', () => {
    // Render the HomePage component inside the HashRouter component for testing
    const { getByText } = render(<HashRouter><HomePage /></HashRouter>);
    expect(getByText('MONEY BACK & GURANTEE')).toBeInTheDocument();
    expect(getByText('100% money back gurantee')).toBeInTheDocument();
  });

  // Test that the Online Support 24/7 card is rendered with the correct text
  it('renders the Online Support 24/7 card', () => {
    // Render the HomePage component inside the HashRouter component for testing
    const { getByText } = render(<HashRouter><HomePage /></HashRouter>);
    expect(getByText('ONLINE SUPPORT 24/7')).toBeInTheDocument();
    expect(getByText('Reach us out at anytime')).toBeInTheDocument();
  });
});
