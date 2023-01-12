import { postAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

// export enum AuthActionTypes {
//   LOGIN_REQUEST = "LOGIN_REQUEST",
//   LOGIN_SUCCESS = "LOGIN_SUCCESS",
//   LOGIN_FAILURE = "LOGIN_FAILURE",
//   REGISTER_REQUEST = "REGISTER_REQUEST",
//   REGISTER_SUCCESS = "REGISTER_SUCCESS",
//   REGISTER_FAILURE = "REGISTER_FAILURE",
//   SET_USER = "SET_USER",
//   UNSET_USER = "UNSET_USER"
// }

// interface LoginRequestAction {
//   type: AuthActionTypes.LOGIN_REQUEST;
// }

// interface LoginSuccessAction {
//   type: AuthActionTypes.LOGIN_SUCCESS;
//   user: object;
//   token: string;
// }

// interface LoginFailureAction {
//   type: AuthActionTypes.LOGIN_FAILURE;
//   error: string;
// }

// interface RegisterRequestAction {
//   type: AuthActionTypes.REGISTER_REQUEST;
// }

// interface RegisterSuccessAction {
//   type: AuthActionTypes.REGISTER_SUCCESS;
//   user: object;
// }

// interface RegisterFailureAction {
//   type: AuthActionTypes.REGISTER_FAILURE;
//   error: string;
// }

// interface SetUserAction {
//   type: AuthActionTypes.SET_USER;
//   user: object;
// }

// interface UnsetUserAction {
//   type: AuthActionTypes.UNSET_USER;
// }

// export type AuthActions =
//   | LoginRequestAction
//   | LoginSuccessAction
//   | LoginFailureAction
//   | RegisterRequestAction
//   | RegisterSuccessAction
//   | RegisterFailureAction
//   | SetUserAction
//   | UnsetUserAction;

// export function setUser(user: object): SetUserAction {
//   return {
//     type: AuthActionTypes.SET_USER,
//     user
//   };
// }

// export function unsetUser(): UnsetUserAction {
//   return {
//     type: AuthActionTypes.UNSET_USER
//   };
// }

export const login = (data: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { loading: true }
    });

    // const res = await postAPI("auth/admin/login", data);
    const res = await postAPI("user/login", data);
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: res.data
    });
    sessionStorage.setItem("token", res.data.token);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.message
      }
    });
  } catch (err: any) {
    // console.log(err);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.message
      }
    });
  }
};

export const register = (data: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { loading: true }
    });

    const res = await postAPI("user/create", data);
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: res.data
    });
    sessionStorage.setItem("token", res.data.token);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.message
      }
    });
  } catch (err: any) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err.message
      }
    });
  }
};
