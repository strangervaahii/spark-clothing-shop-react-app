// This code imports the necessary dependencies for testing the AboutUsPage
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUsPage';
import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

// This code begins the test suite for the AboutUsPage component.
describe('AboutUsPage component', () => {
  // This test checks if the Mission card is rendered.
  it('renders mission card', () => {
    render(<HashRouter><AboutUsPage /></HashRouter>);
    const missionCardTitle = screen.getByText('Mission');
    expect(missionCardTitle).toBeInTheDocument();
  });

  // This test checks if the Vision card is rendered.
  it('renders vision card', () => {
    render(<HashRouter><AboutUsPage /></HashRouter>);
    const visionCardTitle = screen.getByText('Vision');
    expect(visionCardTitle).toBeInTheDocument();
  });

  // This test checks if the Values card is rendered.
  it('renders values card', () => {
    render(<HashRouter><AboutUsPage /></HashRouter>);
    const valuesCardTitle = screen.getByText('Values');
    expect(valuesCardTitle).toBeInTheDocument();
  });

  // This test checks if the Contact card is rendered.
  it('renders contact card', () => {
    render(<HashRouter><AboutUsPage /></HashRouter>);
    const contactCardTitle = screen.getByText('Contact');
    expect(contactCardTitle).toBeInTheDocument();
  });

  // This test checks if the NavLink component has the correct href attribute.
  it('should render a NavLink component with the correct href attribute', () => {
    const { getByText } = render(<HashRouter><AboutUsPage /></HashRouter>);
    const historyLink = getByText('History');
    expect(historyLink).toHaveAttribute('href', '#/history');
  });

  // This test checks if the AboutUsPage component has the correct snapshot.
  it('has right snapshot with all requirements completed', () => {
    const snapshotInJson = renderer.create(<HashRouter><AboutUsPage /></HashRouter>).toJSON();
    // let's assert with toMatchSnapshot
    expect(snapshotInJson).toMatchSnapshot();
  })
});
