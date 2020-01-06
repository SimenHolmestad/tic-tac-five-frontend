import { UPDATE_GAME_DATA } from './types.js';

export function updateGameData (newGameData) {
  return {
    type: UPDATE_GAME_DATA,
    payload: {
      newGameData: newGameData
    }
  };
}

export function fetchGameData(gameId) {
  return async function(dispatch) {
    const url = process.env.REACT_APP_API_URL + '/api/games/' + gameId;
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(updateGameData(data)); // dispatch updateGameData after receiving data
    } catch (error) {
      console.log('Could not fetch game data from server', error);
    }
  };
};

export function doMove(gameId, xPos, yPos, player) {
  return async function(dispatch) {
    const url = process.env.REACT_APP_API_URL + '/api/games/' + gameId + '/move';
    try {
      const opts = {
        xPos: xPos,
        yPos: yPos,
        player: player
      };
      const response = await fetch(url, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(opts)
      });
      console.log(response);
      const data = await response.json();
      if (! data.error) {
        dispatch(updateGameData(data));
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.log('Could not fetch game data from server', error);
    }
  };
};
