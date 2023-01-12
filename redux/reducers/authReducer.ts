// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   REGISTER_REQUEST,
//   REGISTER_SUCCESS,
//   REGISTER_FAILURE,
//   SET_USER,
//   UNSET_USER
// } from "../actions/authAction";

// interface AuthState {
//   user: object | null;
//   token: string | null;
//   error: string | null;
//   isLoading: boolean;
// }

// const initialState: AuthState = {
//   user: null,
//   token: null,
//   error: null,
//   isLoading: false
// };

// // eslint-disable-next-line @typescript-eslint/default-param-last
// const authReducer = (
//   // eslint-disable-next-line @typescript-eslint/default-param-last
//   state = initialState,
//   action: any
// ) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//     case REGISTER_REQUEST:
//       return {
//         ...state,
//         isLoading: true,
//         error: null
//       };
//     case LOGIN_SUCCESS:
//     case REGISTER_SUCCESS:
//       return {
//         ...state,
//         user: action.user,
//         token: action.token,
//         isLoading: false
//       };
//     case LOGIN_FAILURE:
//     case REGISTER_FAILURE:
//       return {
//         ...state,
//         error: action.error,
//         isLoading: false
//       };
//     case SET_USER:
//       return {
//         ...state,
//         user: action.user,
//         token: action.token
//       };
//     case UNSET_USER:
//       return {
//         ...state,
//         user: null,
//         token: null
//       };
//     default:
//       return state;
//   }
// };
// export default authReducer;

import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {};

// eslint-disable-next-line @typescript-eslint/default-param-last
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
