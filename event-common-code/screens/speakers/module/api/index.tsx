import config from '../../../../config/';
import {getAuthReq, getReq} from "../../../../api";

const orgId = 'pOvRkWrvlB1Zc95WwUg5uXe8';

export function fetchSpeaker(eventId: string, speakerId) {
  return getAuthReq(
    `${config.API_ROOT}/workspaces/${orgId}/events/${eventId}/speakers/${speakerId}`,
  );
}

export function fetchSpeakers(eventId: string) {
  return getAuthReq(
    `${config.API_ROOT}/workspaces/${orgId}/events/${eventId}/speakers`,
  );
}

export function fetchStagingSpeakers() {
  return getAuthReq(
    `https://europe-west1-tame-api-staging.cloudfunctions.net/gateway/v1/legacy/workspaces/${orgId}/events/105572738/speakers`,
  );
}

export function getProgramme(eventId) {
  return getReq(
    `${config.API_ROOT}/events/${eventId}/programme`,

    // `https://europe-west1-tame-api-staging.cloudfunctions.net/gateway/v1/legacy/events/105572738/programme`,
  );

  // return getReq(`${config.API_ROOT}/events/${eventId}/programme`);
}

export function fetchPublicSettings(eventId) {
  return getReq(`${config.API_BASE}/pfSites/${eventId}`);
}
