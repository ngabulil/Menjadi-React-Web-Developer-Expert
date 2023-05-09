/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 *   - should return the initial state when given by unknown action
 *   - should return the threads when given by RECEIVE_USERS action
 *
 */

import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const action = {
      type: 'UNKNOWN',
    };
    const initialState = [];

    // Action
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_USERS action', () => {
    // Arrange
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'john_doe',
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'jane_doe',
            name: 'Jane Doe',
            email: 'jane@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
          {
            id: 'alexander',
            name: 'Alexander',
            email: 'alexander@example.com',
            avatar: 'https://generated-image-url.jpg',
          },
        ],
      },
    };
    const initialState = [];

    // Action
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.users);
  });
});
