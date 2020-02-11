import {fetchEventDetails} from '../api';
import {LOADING_EVENT_DETAIL_FAILURE, LOADING_EVENT_DETAIL_SUCCESS} from "../constants";

export function fetchEvent(activeEvent) {
  return async dispatch => {
    if (activeEvent) {
      try {
        const eventList = await fetchEventDetails(activeEvent);
        const action = {
          type: LOADING_EVENT_DETAIL_SUCCESS,
          payload: eventList,
        };
        dispatch(action);
      } catch (error) {
        const action = {
          type: LOADING_EVENT_DETAIL_FAILURE,
          payload: [],
        };
        dispatch(action);
        console.log('error', error);
      }
    }
  };
}
