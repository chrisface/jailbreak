export const GET_AUTH_REQUESTED = 'user/GET_AUTH_REQUESTED';
export const GET_AUTH = 'user/GET_AUTH';

const initialState = {
  userUUID: null,
  isGettingAuth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_REQUESTED:
      return {
        ...state,
        isGettingAuth: true
      };

    case GET_AUTH:
      return {
        ...state,
        userUUID: action.userUUID,
        isGettingAuth: !state.isDecrementing
      };

    default:
      return state;
  }
};

export const getAuthAsync = () => {
  return dispatch => {
    dispatch({
      type: GET_AUTH_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: GET_AUTH
      });
    }, 3000);
  };
};
