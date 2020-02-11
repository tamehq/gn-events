import config from '../../../../config/index';
import {getAuthReq, getReq} from "../../../../api";

export function getProgramme(eventId) {
  console.log('api root', config.API_ROOT);
  return getReq(
    `${config.API_ROOT}/events/${eventId}/programme`,

    // `https://europe-west1-tame-api-staging.cloudfunctions.net/gateway/v1/legacy/events/96548598/programme`,
  );

  // return getReq(`${config.API_ROOT}/events/${eventId}/programme`);
}

export function getColors(eventId) {
  return getAuthReq(`${config.API_ROOT}/events/${eventId}/colors`);
}
