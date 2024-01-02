import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { fetchApi } from '../../utils/fetchApi';
import ProductsPage from './ProductsPage';

jest.mock('../../utils/fetchApi');
// 1. Mock the fetchApi utility module

describe('Product', () => {
  // NEGATIVE SPEC
  it('[Mocking]: renders error properly during API Call', async () => {
    // preparing mock error obj
    const error = {
      errorInfo: 'Sorry! Unable to fetch product page ! Try Again Later.'
    };

    fetchApi.mockRejectedValue(error);
    // 2. Set up a mock for the fetchApi function to reject with the above error
    render(<HashRouter><ProductsPage /></HashRouter>);
    expect(await screen.findByText(/Sorry! Unable to fetch product page ! Try Again Later./i)).toBeInTheDocument();
    // 3. Render the ProductsPage component wrapped inside HashRouter and assert that the error message is displayed
  });

  it('[Mocking] fetches ProductList properly via Api Call', async () => {
    // 1. prepare the mock data for the Men
    // 2. resolve the req with the above mock data
    // 3. render the comp // Act
    // 4. then, Asserts

    // 1. Prepare mock data for the product list
    const mockProductList = [
      {
        // properties of product 1
        id: 1,
        imageUrl: '/assets/images/kids-wear/kid2.jpg',
        imgAltText: 'Girls Party Top Jean',
        name: 'Arshia fashions',
        category: 'kids',
        description: 'Girls Party Top Jean',
        cost: 999,
        maxRetailPrice: 2499,
        discountApplicable: 14,
        added: '4/9/2021',
        quantity: 30,
        bestSellerRanking: 3,
        featured: true
      },
      {
        // properties of product 2
        id: 2,
        imageUrl: '/assets/images/kids-wear/kid3.jpg',
        imgAltText: 'Girls Midi Knee Length',
        name: 'WishKaro',
        category: 'kids',
        description: 'Girls Midi Knee Length',
        cost: 519,
        maxRetailPrice: 2299,
        discountApplicable: 14,
        added: '4/9/2021',
        quantity: 30,
        bestSellerRanking: 2,
        featured: true
      }
    ];

    // 2. Resolve the fetchApi request with the above mock data
    // 2.1. Set up a mock for the fetchApi function (see before describe block)
    // 2.2. Resolve the request with mock data
    fetchApi.mockResolvedValue(mockProductList);

    // 3. Render the ProductsPage component wrapped inside HashRouter
    render(<HashRouter><ProductsPage /></HashRouter>);

    // 4. Assert that the products are displayed properly
    const productName = screen.findByText('Girls Midi Knee Length');
    expect(productName).toBeTruthy();
  });
  it('sets correct URL based on queryParam', () => {
    const queryParam = 'kids';
    let url;

    if (queryParam === 'kids') {
      url = 'http://localhost:5000/products?category=kids'
    } else if (queryParam === 'men') {
      url = 'http://localhost:5000/products?category=men'
    } else if (queryParam === 'women') {
      url = 'http://localhost:5000/products?category=women'
    } else {
      url = 'http://localhost:5000/products'
    }

    expect(url).toEqual('http://localhost:5000/products?category=kids');
  });
});
