// Importing necessary dependencies and components for testing
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CarouselList from './CarouselList';

// Describing a test suite for the CarouselList component
describe('CarouselList component', () => {
  // Writing a test case for the component's button click behavior
  it('should navigate to /products on button click', () => {
    // Rendering the CarouselList component within a MemoryRouter component, with initial entry of '/products'
    render(
      <MemoryRouter initialEntries={['/products']}>
        <CarouselList />
      </MemoryRouter>
    );

    // Finding the first button on the page that has the text 'Browse More Products'
    const button = screen.getAllByText('Browse More Products')[0];
    fireEvent.click(button);
    // Asserting that the window location's pathname should be '/products' after the button is clicked
    expect(window.location.pathname).toBe('/products');
  });
});
