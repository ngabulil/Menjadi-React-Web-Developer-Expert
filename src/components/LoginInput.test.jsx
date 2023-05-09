/**
 * test scenario for LoginInput component
 *
 * - LoginInput component
 *   - sshould handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async function () {
    // Arrange
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );
    const emailInput = await screen.getByPlaceholderText('Masukkan Email');

    // Action
    await userEvent.type(emailInput, 'emailtest@email.com');

    // Assert
    expect(emailInput).toHaveValue('emailtest@email.com');
  });
  it('should handle password typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <LoginInput login={() => {}} />
      </BrowserRouter>
    );
    const passwordInput = await screen.getByPlaceholderText('Masukkan Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });
  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(
      <BrowserRouter>
        <LoginInput login={mockLogin} />
      </BrowserRouter>
    );
    const emailInput = await screen.getByPlaceholderText('Masukkan Email');
    await userEvent.type(emailInput, 'emailtest@email.com');
    const passwordInput = await screen.getByPlaceholderText('Masukkan Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Login' });
    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailtest@email.com',
      password: 'passwordtest',
    });
  });
});
