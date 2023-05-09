/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *   - should return the initial state when given by unknown action
 *   - should return the threads when given by RECEIVE_THREAD_DETAIL
 *   - should return the threads with the clear thread when given by CLEAR_THREAD_DETAIL
 *
 */

import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const action = {
      type: 'UNKNOWN',
    };
    const initialState = [];

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
  it('should return the threads when given by RECEIVE_THREAD_DETAIL', () => {
    // arrange
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: [
          {
            id: 'thread-detail-1',
            title: 'Thread Detail Test 1',
            body: 'Ini adalah thread pertama',
            comments: [],
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
          },
          {
            id: 'thread-detail-2',
            title: 'Thread Detail Test 2',
            body: 'Ini adalah thread kedua',
            comments: [],
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
          },
        ],
      },
    };
    const initialState = [];

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });
  it('should return the threads with the clear thread when given by CLEAR_THREAD_DETAIL', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-detail-1',
        title: 'Thread Detail Test 1',
        body: 'Ini adalah thread pertama',
        comments: [],
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
      },
    ];

    const action = {
      type: 'CLEAR_THREAD_DETAIL',
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });
});
