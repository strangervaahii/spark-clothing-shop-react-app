// Import the necessary testing functions from the @testing-library/react library
import { render, screen, waitFor } from '@testing-library/react';

// Import the fetchApi function from the application code
import { fetchApi } from '../../../utils/fetchApi';

// Import the ContactAddress component to be tested
import ContactAddress from './ContactAddress';

// Mock the fetchApi function
jest.mock('../../../utils/fetchApi');

// Define the test suite for the ContactAddress component
describe('contactAddress', () => {
  // Define the test spec for fetching the contact address
  it('[Mocking] fetches contact address properly via Api Call', async () => {
    // 1. prepare the mock data for the users
    const mockContactAddress = [
      {
        address: '280 ParK Avenue Z,Cross cut Complex, Bangalore, India'
      }
    ];

    // 2. Resolve the request with the above mock data
    // 2.1. Set up a mock for the fetchApi function
    // 2.2. Resolve the request with the mock data
    fetchApi.mockResolvedValue(mockContactAddress);

    // 3. Render the component to be tested
    render(<ContactAddress />);

    // 4. Assert that the fetched data is displayed correctly
    await waitFor(() => {
      expect(
        screen.findByText(
          '280 ParK Avenue Z,Cross cut Complex, Bangalore, India'
        )
      ).toBeTruthy();
    });
  });

  // Define the test spec for fetching the contact email
  it('[Mocking] fetches contact email properly via Api Call', async () => {
    // 1. prepare the mock data for the users
    const mockContactEmail = [
      {
        email: 'contact@sparkclothing.coms'
      }
    ];

    // 2. Resolve the request with the above mock data
    // 2.1. Set up a mock for the fetchApi function
    // 2.2. Resolve the request with the mock data
    fetchApi.mockResolvedValue(mockContactEmail);

    // 3. Render the component to be tested
    render(<ContactAddress />);

    // 4. Assert that the fetched data is displayed correctly
    await waitFor(() => {
      expect(screen.findByText('contact@sparkclothing.com')).toBeTruthy();
    });
  });

  // Define the negative test spec for handling API errors
  it('[Mocking]: renders error properly during API Call', async () => {
    // 1. Prepare a mock error object
    const error = {
      errorInfo: 'Sorry! Unable to fetch contact address!!! Try Again Later.'
    };

    // 2. Reject the request with the mock error object
    fetchApi.mockRejectedValue(error);

    // 3. Render the component to be tested
    render(<ContactAddress />);
    // 4. Assert that the error message is displayed correctly
    expect(await screen.findByText(/Sorry! Unable to fetch contact address ! Try Again Later/i)).toBeInTheDocument();
  });
});
