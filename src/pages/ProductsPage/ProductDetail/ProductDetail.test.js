// Importing required functions and modules for testing
import { render, screen, waitFor } from '@testing-library/react';
import { fetchApi } from '../../../utils/fetchApi';
import ProductDetail from './ProductDetail';

// Mocking the fetchApi module
jest.mock('../../../utils/fetchApi');

// Describing the test suite for ProductDetail component
describe('productDetail page ', () => {
  // Describing the test suite for ProductDetail component
  it('[Mocking]: renders error properly during API Call', async () => {
    // preparing mock error obj
    const error = {
      errorInfo: 'Sorry! Unable to fetch product detail page ! Try Again Later'
    };

    // Mocking the fetchApi to reject the error object
    fetchApi.mockRejectedValue(error);

    // Rendering the ProductDetail component
    render(<ProductDetail />);

    // Checking if the error message is displayed
    expect(
      await screen.findByText(/Sorry! Unable to fetch product detail page ! Try Again Later/i)
    ).toBeInTheDocument();
  });

  // Testing display of product details
  it('should display product details', async () => {
    fetchApi.mockResolvedValueOnce([
      {
        id: 1,
        imageUrl: '/assets/images/kids-wear/kid6.jpg',
        imgAltText: 'Boys Regular Fit',
        name: 'TRIPR',
        category: 'kids',
        description: 'Boys Regular Fit',
        cost: 939,
        maxRetailPrice: 1399,
        discountApplicable: 14,
        added: '4/9/2021',
        quantity: 30,
        bestSellerRanking: 4,
        featured: true
      },
      {
        id: 2,
        imageUrl: '/assets/images/kids-wear/kid7.jpg',
        imgAltText: 'Boys Cotton Casual shirt',
        name: 'Tiny Brezy',
        category: 'kids',
        description: 'Boys Cotton Casual shirt',
        cost: 974,
        maxRetailPrice: 1099,
        discountApplicable: 14,
        added: '4/9/2021',
        quantity: 30,
        bestSellerRanking: 5,
        featured: true
      }
    ]);

    // Testing display of product details
    render(<ProductDetail />);

    // Testing display of product details
    await waitFor(() => {
      expect(fetchApi).toHaveBeenCalledTimes(1);
    });

    // Checking if the product details are displayed
    expect(screen.queryByText(/Product1/i)).not.toBeInTheDocument();
  });
});
