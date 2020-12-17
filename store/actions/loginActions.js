import { SET_LOGIN_STATE} from "./types";
export const setLoginState = (loginData) => {
    return {
      type: SET_LOGIN_STATE,
      payload: loginData,
    };
  };
