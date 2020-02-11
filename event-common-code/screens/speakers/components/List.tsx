import React from 'react';
import Styled from 'styled-components/native';
import {Text, View, FlatList} from 'react-native';
import Data from '../data';
import ListItem from './ListItem';

const SpeakersList = Styled(FlatList)`
  margin-top: 15px;
`;

export interface ListProps {
  name: string;
  designation: string;
  uri: File;
}

const List = () => {
  return (
    <SpeakersList
      data={Data}
      keyExtractor={(_item: ListProps, Index) => Index.toString()}
      renderItem={({item}) => <ListItem {...item} />}
    />
  );
};

export default List;
