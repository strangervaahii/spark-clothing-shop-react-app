// Importing necessary dependencies for testing
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LatestProduct from './LatestProduct'; // Importing the component to be tested

const mockLatestProduct = [
  {
    id: 1,
    name: 'Product 1',
    imageUrl: 'https://example.com/product1.jpg',
    imgAltText: 'Product 1 image',
    cost: 100,
    maxRetailPrice: 200,
    discountApplicable: 50
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://example.com/product2.jpg',
    imgAltText: 'Product 2 image',
    cost: 200,
    maxRetailPrice: 300,
    discountApplicable: 33
  }
];

// Defining the test suite
describe('LatestProduct', () => {
  // Defining the test case
  it('renders the latest products', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockLatestProduct)
    });

    // Render the LatestProduct component inside a MemoryRouter
    render(
      <MemoryRouter>
        <LatestProduct />
      </MemoryRouter>
    );

    // Check that the "Latest Products" heading is rendered
    expect(screen.getByRole('heading', { name: 'Latest Products' })).toBeInTheDocument();

    // Check that the product cards are rendered
    expect(await screen.findAllByRole('img')).toHaveLength(2);

    // Check that the "View All" button is rendered
    expect(screen.getByRole('button', { name: 'View All' })).toBeInTheDocument();
  });
});
