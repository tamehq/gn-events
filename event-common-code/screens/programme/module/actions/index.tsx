import {
  FETCH_PROGRAMME,
  PROGRAMME_FETCH_SUCCESS,
  PROGRAMME_FETCH_FAIL,
} from '../constants/index';
import {getProgramme} from '../api';
import gql from 'graphql-tag';

const GET_FAV_PROGRAMMESS = gql`
  query attendeFavouritedProgrammeSessions {
    attendeFavouritedProgrammeSessions {
      id
      attendeeId
      eventId
      programmeSessionId
    }
  }
`;

export function fetchProgramme(activeEvent) {
  return async dispatch => {
    if (activeEvent) {
      const programmeList = await getProgramme(activeEvent);
      console.log('programm gotten', programmeList);
      const action = {
        type: FETCH_PROGRAMME,
        payload: programmeList,
      };
      dispatch(action);
    }
  };
}

function fetchProgrammSuccess() {
  return dispatch => {
    const action = {
      type: PROGRAMME_FETCH_SUCCESS,
    };
    dispatch(action);
  };
}

// function functionProgrammFail() {
//   return (dispatch) => {
//     const action = {
//       type: PROGRAMME_FETCH_FAIL,
//     }
//     dispatch(action)
//   }
// }

// export function fetchProgramme(id) {
//   return dispatch =>
//     api
//       .fetchProgramme(id)
//       .then((response) => {
//         dispatch(fetchProgrammeSuccess(response));
//       })
//       .catch((error) => {
//         console.error(error);
//         dispatch(apiFail('programme'), FETCH_PROGRAMME);
//       });
// }

//  export function fetchProgrammeSuccess(response) {
//   return {
//     type: FETCH_PROGRAMME_SUCCESS,
//     payload: {
//       data: response.body,
//     },
//   };
// }

// export function fetchProgramme(id) {
//   return dispatch =>
//     api
//       .fetchProgramme(id)
//       .then((response) => {
//         dispatch(fetchProgrammeSuccess(response));
//       })
//       .catch((error) => {
//         console.error(error);
//         dispatch(apiFail('programme'), FETCH_PROGRAMME);
//       });
// }
