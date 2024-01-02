import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders its children if there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Hello World</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('displays an error message if there is an error', () => {
    // Mock an error by throwing an exception inside the child component
    const ErrorThrower = () => {
      throw new Error('Something went wrong');
    };
    render(
      <ErrorBoundary>
        <ErrorThrower />
      </ErrorBoundary>
    );
    expect(screen.getByText('Some Error Occurred!')).toBeInTheDocument();
    expect(screen.getByText('Try again later. If the error persists contact the Admin')).toBeInTheDocument();
  });
});
