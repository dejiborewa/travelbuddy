import { GLOBALTYPES } from "../actions/globalTypes";

// eslint-disable-next-line @typescript-eslint/default-param-last
const alertReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GLOBALTYPES.ALERT:
      return action.payload;
    default:
      return state;
  }
};

export default alertReducer;
