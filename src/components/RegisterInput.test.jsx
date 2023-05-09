/**
 * test scenario for RegisterInput component
 *
 * - RegisterInput component
 *   - should handle username typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('RegisterInput component', () => {
  it('should handle username typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const usernameInput = await screen.getByPlaceholderText('Masukkan Username');

    // Action
    await userEvent.type(usernameInput, 'usernametest');

    // Assert
    expect(usernameInput).toHaveValue('usernametest');
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <RegisterInput register={() => {}} />
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
        <RegisterInput register={() => {}} />
      </BrowserRouter>
    );
    const passwordInput = await screen.getByPlaceholderText('Masukkan Password');

    // Action
    await userEvent.type(passwordInput, 'passwordtest');

    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    render(
      <BrowserRouter>
        <RegisterInput register={mockRegister} />
      </BrowserRouter>
    );
    const usernameInput = await screen.getByPlaceholderText('Masukkan Username');
    await userEvent.type(usernameInput, 'usernametest');
    const emailInput = await screen.getByPlaceholderText('Masukkan Email');
    await userEvent.type(emailInput, 'emailtest@email.com');
    const passwordInput = await screen.getByPlaceholderText('Masukkan Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'usernametest',
      email: 'emailtest@email.com',
      password: 'passwordtest',
    });
  });
});
