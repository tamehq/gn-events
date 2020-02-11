import AsyncStorage from '@react-native-community/async-storage';
import config from '../config/';
import gql from "graphql-tag";
import {client} from "../graphQl";

const jwt_decode = require('jwt-decode');

const GET_ATTENDEE = gql`
  query Attendee($attendeeId: ID!) {
    attendee(attendeeId: $attendeeId) {
      id
      name {
        first
        last
      }
      eventId
      employment {
        position
        company
      }
      contacts {
        social {
          linkedin
          twitter
        }
      }
      imageUri
    }
  }
`;

const UPDATE_IMAGE = gql`
  mutation updatePicture($input: UpdateAttendeePlatformInput!) {
    updateAttendeeFromPlatform(input: $input) {
      id
      imageUri
    }
  }
`;

export function getReq(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export async function getAuthReq(url) {
  console.log('url', url);
  const token = await AsyncStorage.getItem('token');
  var decoded = jwt_decode(token);
  if (decoded.token) {
    console.log('token', `Bearer ${token}`);
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.FIREBASE_TOKEN}`,
      },
    })
      .then(response => {
        return response.json();
      })
      .catch(error => console.log('in error', JSON.parse(error)));
  }
}

export function postReq(url, body) {
  console.log('url', url);
  console.log('body', JSON.stringify(body));
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(error => console.log(error));
}

export const getCurrentUser = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      const {attendeeId} = jwt_decode(token);
      return client.query({query: GET_ATTENDEE, variables: {attendeeId}})
          .then(res => {
            const {data: {attendee = {}} = {}} = res
            return attendee
          });
    }
  }catch (e) {
    console.log('User fetching error :', e.message)
  }
}

export const uploadImage = async (image, id) => {
  console.log('image data', image, id)
  try {
    let imageUri = `data:${image.mime};base64,${image.data}`;
    const response = await client.mutate({
      mutation: UPDATE_IMAGE,
      variables: {
        input: { id, imageUri }
      }
    })
    console.log('image uploaded response ', response)
    return response
  }catch (e) {
    console.log('Image uploading error :', e.message)
  }
}
