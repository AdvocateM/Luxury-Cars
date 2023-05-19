import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from '../Signup';

describe('Signup Component', () => {
  test('renders the Signup form', () => {
    render(
      <Router>
        <Signup />
      </Router>
    );

    // Verify the presence of form elements
    expect(screen.getByPlaceholderText('Enter Full Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Passwords')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByAltText('show password')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Forgot Passwords' })
    ).toBeInTheDocument();
    expect(screen.getByText('Sign In Instead')).toBeInTheDocument();
  });

  test('submits the form', async () => {
    render(
      <Router>
        <Signup />
      </Router>
    );

    // Simulate form input
    fireEvent.change(screen.getByPlaceholderText('Enter Full Name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Passwords'), {
      target: { value: 'password123' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('Sign Up'));

    // Verify form submission
    // You can add assertions based on your specific implementation
  });
});
