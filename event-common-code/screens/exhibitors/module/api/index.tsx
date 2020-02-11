import gql from 'graphql-tag';
import {CompanyClient} from "../../../../graphQl";

const GET_ATTENDEES = gql`
  query getPartners($eventId: String!, $type: eventCompanyType) {
    eventCompanies(eventId: $eventId, type: $type) {
      id
      note
      company {
        id
        imageUri
        title
        website
        description
      }
      social {
        facebook
        linkedin
        twitter
        instagram
      }
      category {
        name
        id
        eventId
      }
      categoryId
    }
  }
`;

export const fetchAttendeesList = async (eventId: string = '27998856') => {
  try {
    if (eventId) {
      return CompanyClient.query({
        query: GET_ATTENDEES,
        variables: {eventId: '27998856', type: 'Exhibitor'},
      })
        .then(({data}: any) => {
          console.log('ex', data);
          return data.eventCompanies;
        })
        .catch(e => console.log('Error in fetching attendee', e.message));
    }
  } catch (e) {
    console.log('User fetching error :', e.message);
  }
};

// const GET_CATEGORIES = gql`
//   query categories($eventId: String!) {
//     eventCompanyCategories(eventId: $eventId) {
//       id
//       name
//     }
//   }
// `;
