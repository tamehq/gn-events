import React from 'react';
import {FlatList} from 'react-native';
import Card from '../components/VenueCard';

function VenueList({navigation, data}) {
  return (
    <FlatList
      style={{marginTop: 15}}
      data={data}
      keyExtractor={(item: any, index) => item.id || index.toString()}
      renderItem={({item}) => <Card {...item} {...navigation} />}
    />
  );
}

export default VenueList;
