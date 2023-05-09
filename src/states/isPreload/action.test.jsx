/**
 *  test scenario for asyncPreloadProcess
 *
 * - asyncPreloadProcess thunk
 *   - should dispatch action correctly when data fetching success
 *   - should dispatch action and call alert correctly when data fetching failed
 */

import { asyncPreloadProcess, setIsPreloadActionCreator } from './action';
import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { setAuthUserActionCreator } from '../authUser/action';

const fakeAuthUserResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    // restore original implementation
    api.getOwnProfile = api._getOwnProfile;

    // delete backup
    delete api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // Arrange
    // stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // Action
    await asyncPreloadProcess()(dispatch);

    // Assert
    // dispatch is called with correct action
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // Arrange
    // stub implementation
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = jest.fn();

    // Action
    await asyncPreloadProcess()(dispatch);

    // Assert
    // dispatch is called with correct action
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
