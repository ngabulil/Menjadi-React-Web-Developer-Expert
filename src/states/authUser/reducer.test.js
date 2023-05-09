/**
 * test scenario for authUserReducer
 *
 * - authUserReducer function
 *   - should return the initial state when given by unknown action
 *   - should return the signin authentication user when given by SET_AUTH_USER action
 *   - should return the logout user when given by UNSET_AUTH_USER action
 *
 */

import authUserReducer from './reducer';

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const action = {
      type: 'UNKNOWN',
    };
    const initialState = [];

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the signin authentication user when given by SET_AUTH_USER action', () => {
    // Arrange
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser: {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
      },
    };
    const initialState = [];

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.authUser);
  });
  it('should return the logout user when given by UNSET_AUTH_USER action', () => {
    // Arrange
    const action = {
      type: 'UNSET_AUTH_USER',
    };
    const initialState = [];

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(null);
  });
});
