import { postAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

export const TRIP_TYPES = {
  CREATE_TRIP: "CREATE_TRIP"
};

export const createTrip = (data: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: true
      }
    });

    const res = await postAPI("trip/create", data);
    dispatch({
      type: TRIP_TYPES.CREATE_TRIP,
      payload: res.data
    });

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        loading: false
      }
    });
  } catch (err) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: err
      }
    });
  }
};
