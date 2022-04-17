export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const loginSuccess = (token) => {
    return {
      type: LOGIN_SUCCESS,
      payload: token,
    };
  };

  export const logoutSuccess = (key) => {
    return {
      type: LOGOUT_SUCCESS,
      payload: key,
    };
  };