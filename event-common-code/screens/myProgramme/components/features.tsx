import React from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import {Card} from 'native-base';

const Feature = Styled(Card)`
  width: 90px;
  background: #ffffff;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 5px;
`;

const FeatureText = Styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 14px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  text-align: center;
`;

function Features() {
  function RenderFeature(props) {
    return (
      <Feature>
        <FeatureText>{props.item}</FeatureText>
      </Feature>
    );
  }
  return (
    <FlatList
      style={{marginTop: 5}}
      numColumns={3}
      showsHorizontalScrollIndicator={false}
      data={['Room', 'Canteen', 'Open Bar', 'Helipad']}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => <RenderFeature item={item} />}
    />
  );
}

export default Features;
