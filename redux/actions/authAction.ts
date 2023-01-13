import { postAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

export const login = (data: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { loading: true }
    });

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
