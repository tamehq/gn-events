import config from '../../../../config/';
import {postReq} from "../../../../api";

export async function login(email): Promise<number> {
  let body = {
    email: email,
  };
  let sendMail = await postReq(
    `${config.NEW_STAGING}/identity/authentication/attendee/requestAttendeeValidationToken`,
    body,
  );
  console.log('status', sendMail);
  return sendMail;
}

export async function verifyEventCode(email, token): Promise<object> {
  let validationBody = {
    email: email,
    token: token,
  };
  let validate = await postReq(
    `${config.NEW_STAGING}/identity/authentication/attendee/validateAttendeeToken`,
    validationBody,
  );
  console.log('validation', validate);
  return validate;
}
