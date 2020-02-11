import gql from 'graphql-tag';
import {CompanyClient} from "../../../../graphQl";
export const fetchPartnersList = async (eventId: string = '27998856') => {
  try {
    if (eventId) {
      return CompanyClient.query({
        query: GET_PARTNERS,
        variables: {eventId: eventId, type: 'Partner'},
      })
        .then(({data}: any) => {
          return data.eventCompanies;
        })
        .catch(e => console.log('Error in fetching partners', e.message));
    }
  } catch (e) {
    console.log('User fetching error :', e.message);
  }
};

const GET_PARTNERS = gql`
  query getPartners($eventId: String!, $type: eventCompanyType) {
    eventCompanies(eventId: $eventId, type: $type) {
      id
      note
      company {
        id
        imageUri
        title
        description
        website
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
