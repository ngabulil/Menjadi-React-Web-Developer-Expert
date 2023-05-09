/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer function
 *   - should return the initial state when given by unknown action
 *   - should return the leaderboards when given by RECEIVE_LEADERBOARDS
 *
 */

import leaderboardsReducer from './reducer';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const action = {
      type: 'UNKNOWN',
    };
    const initialState = [];

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS', () => {
    // arrange
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboard: [
          {
            score: 0,
            user: {
              id: 'john_doe',
              name: 'John Doe',
              email: 'jane@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
          },
          {
            score: 0,
            user: {
              id: 'jone_doe',
              name: 'Jane Doe',
              email: 'jahn@example.com',
              avatar: 'https://generated-image-url.jpg',
            },
          },
        ],
      },
    };
    const initialState = [];

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboard);
  });
});
