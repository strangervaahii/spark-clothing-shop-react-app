// Importing the required modules and components
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuList from './MenuList';

// Describing the MenuList test suite
describe('MenuList', () => {
  // Testing the rendering of all menu items
  it('renders all menu items', () => {
    // Defining an array of menu items
    const navItems = [
      {
        id: 1,
        title: 'Home',
        url: '/'
      },
      {
        id: 2,
        title: 'Products',
        url: '/products'
      },
      {
        id: 3,
        title: 'About',
        url: '/about-us'
      },
      {
        id: 4,
        title: 'Contact',
        url: '/contact-us'
      }
    ];

    // Rendering the MenuList component with the MemoryRouter component to test routing
    render(<MemoryRouter><MenuList navItems={navItems} /></MemoryRouter>);
    const menuList = screen.getByTestId('menuList');

    // Asserting that the menuList element is present in the document and contains the correct number of child elements
    expect(menuList).toBeInTheDocument();
    expect(menuList.children.length).toBe(navItems.length);

    // Looping through each menu item and asserting that the corresponding MenuItem component has been rendered and has the correct title and URL
    navItems.forEach((navItem) => {
      const menuItem = screen.getByText(navItem.title);
      expect(menuItem).toBeInTheDocument();
      expect(menuItem.getAttribute('href')).toBe(navItem.url);
    });
  });
});
