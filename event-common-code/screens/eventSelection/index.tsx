import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import Events from './EventSelection';
import {EventClient} from "../../graphQl";

function eventSelectionContainer({navigation}) {
  return (
    <ApolloProvider client={EventClient}>
      <Events navigation={navigation} />
    </ApolloProvider>
  );
}

export default eventSelectionContainer;
