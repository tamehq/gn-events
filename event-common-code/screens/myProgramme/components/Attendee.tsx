import React from 'react';
import Styled from 'styled-components/native';
import Avatar from '../../../components/Avatar';
import {AttendeInterface} from './card';

const Container = Styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ListItemComponent = (props: AttendeInterface) => {
  const {avatar, name, designation} = props;
  return (
    <Container>
      <Avatar source={avatar} />
    </Container>
  );
};

export default ListItemComponent;
