import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Explore from '../Explore';

describe('Explore', () => {
  test('renders without errors', () => {
    render(
      <BrowserRouter>
        <Explore />
      </BrowserRouter>
    );
    // Check if the component renders without throwing any errors
  });

  test('displays the correct category headings and images', () => {
    render(
      <BrowserRouter>
        <Explore />
      </BrowserRouter>
    );

    const rentCategoryHeading = screen.getByText('Place for rent');
    const rentCategoryImage = screen.getByAltText('rent');
    const salesCategoryHeading = screen.getByText('Place for Sales');
    const salesCategoryImage = screen.getByAltText('sale');

    expect(rentCategoryHeading).toBeInTheDocument();
    expect(rentCategoryImage).toBeInTheDocument();
    expect(salesCategoryHeading).toBeInTheDocument();
    expect(salesCategoryImage).toBeInTheDocument();
  });

  // ... add more test cases as needed
});
