import config from '../../../../config/index';
import {getReq} from "../../../../api";

export function fetchEventDetails(eventId) {
  console.log('get reqqqq');
  return getReq(`${config.API_BASE}/pfSites/${eventId}`);
}
