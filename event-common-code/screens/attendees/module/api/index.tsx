import gql from "graphql-tag";
import {client} from "../../../../graphQl";


export const fetchAttendeesList = async (eventId: string = '27998856') => {
  try {
    if (eventId) {
      return client.query({query: GET_ATTENDEES, variables: {eventId}})
          .then(({ data }: any) => {
            return data.attendees
          }).catch(e => console.log('Error in fetching attendee', e.message));
    }
  }catch (e) {
    console.log('User fetching error :', e.message)
  }
}

const GET_ATTENDEES = gql`
query getAttendees($eventId: ID!) {
  attendees(eventId: $eventId) {
    id
    created
    confirmed
    name {
      first
      last
    }
    employment {
      position
      company
    }
    imageUri
    status
       description
    contacts {
      email
      phone
      social {
        linkedin
        twitter
        skype
        facebook
        instagram
        snapchat
      }
    }
  }
}
`;
