// Importing the required components
import MenuItem from './MenuItem/MenuItem';
import React from 'react';

// Defining the MenuList functional component
const MenuList = () => {
  // Defining an array of objects containing menu items
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
  ]
  // Rendering the menu list with the menu items
  return (
    <ul className="navbar-nav" data-testid="menuList">
      {/* Mapping through each menu item and rendering it using the MenuItem component */}
      {navItems.map((navItem) => {
        return <MenuItem key={navItem.id} {...navItem} />;
      })}
    </ul>
  );
};

// Exporting the MenuList component
export default MenuList;
