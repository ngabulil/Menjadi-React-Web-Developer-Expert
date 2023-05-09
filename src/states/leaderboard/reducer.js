import { ActionType } from './action';

function getLeaderboardReducer(leaderboard = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.payload.leaderboard;
    default:
      return leaderboard;
  }
}

export default getLeaderboardReducer;
