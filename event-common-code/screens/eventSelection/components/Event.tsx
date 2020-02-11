import React from 'react';
import Card from './Cards';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {formatDate} from '../utils';

const GET_EVENT_BYIDS = gql`
  query getEvent($eventId: ID) {
    getEvent(eventId: $eventId) {
      id
      title
      status
      start
      finish
      timeZone
      venue {
        title
        address
        postCode
        city
      }
    }
  }
`;

function EventComponent({eventId, navigation}: any) {
  const {data, loading, error} = useQuery(GET_EVENT_BYIDS, {
    variables: {
      eventId,
    },
  });

  if (loading) return null;
  if (error) return null;
  if (data.getEvent && data.getEvent.status === 'inactive') {
    return null;
  }

  const {title, venue, start, finish, timeZone, id} = data.getEvent;
  const address = `${venue.title}, ${venue.address}, ${venue.postCode} ${venue.city}`;
  const time = formatDate(start, finish, timeZone);
  return (
    <Card
      title={title}
      address={address}
      time={time}
      id={id}
      navigation={navigation}
    />
  );
}

export default EventComponent;
