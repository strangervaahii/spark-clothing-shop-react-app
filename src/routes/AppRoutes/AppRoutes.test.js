// Importing render and screen from the testing-library/react library
import { render, screen } from '@testing-library/react';

// Importing MemoryRouter from react-router-dom library
import { MemoryRouter } from 'react-router-dom';

// Importing the AppRoutes component to be tested
import AppRoutes from './AppRoutes';

// Describing the AppRoutes component tests
describe('AppRoutes component', () => {
  // Testing the rendering of the homepage component when the path is empty
  it('should render the homepage component when path is empty', async () => {
    // Rendering the AppRoutes component with an empty path using MemoryRouter
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>
    );
    // Finding the page title element by its text and waiting for it to appear
    const pageTitle = await screen.findByText(/Reach us out at anytime/i);
    expect(pageTitle).toBeInTheDocument();
  });

  // Testing the rendering of the products page component when the path is /products
  it('should render the products page component when path is products', async () => {
    render(
      <MemoryRouter initialEntries={['/products']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = await screen.findByText(/Products/i);
    expect(pageTitle).toBeInTheDocument();
  });

  // Testing the rendering of the product detail page component when the path is /products/:id
  it('should render the product detail page component when path is products with id', async () => {
    render(
      <MemoryRouter initialEntries={['/products/1']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = await screen.findByText(/Product Detail/i);
    expect(pageTitle).toBeInTheDocument();
  });

  // Testing the rendering of the about us page component when the path is /about-us
  it('should render the about us page component when path is about-us', async () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = await screen.findByText(/mission/i);
    expect(pageTitle).toBeInTheDocument();
  });

  // Testing the rendering of the history page component when the path is /about-us/history
  it('should render the history page component when path is about-us under history', async () => {
    render(
      <MemoryRouter initialEntries={['/about-us/history']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = await screen.findByText(/History/i);
    expect(pageTitle).toBeInTheDocument();
  });

  // Testing the rendering of the contact us page component when the path is /contact-us
  it('should render the contact us page component when path is /contact-us', async () => {
    render(
      <MemoryRouter initialEntries={['/contact-us']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = await screen.findByText(/Contact Us/i);
    expect(pageTitle).toBeInTheDocument();
  });

  // Testing the rendering of the contact us page component when the path is page not found
  it('should render the page not found component when path is invalid', async () => {
    render(
      <MemoryRouter initialEntries={['/invalid-path']}>
        <AppRoutes />
      </MemoryRouter>
    );
    const pageTitle = await screen.findByText(/Page Not Found/i);
    expect(pageTitle).toBeInTheDocument();
  });
});
