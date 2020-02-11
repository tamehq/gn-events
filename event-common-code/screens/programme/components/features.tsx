import React from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

const Feature = Styled.View`
  background: #ffff;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  padding: 10px;
  margin-bottom: 10px;
`;

const FeatureText = Styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 14px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  text-align: center;
`;

function Features({features}) {
  function RenderFeature({item}) {
    if (item.eventTag !== undefined) {
      return (
        <Feature>
          <FeatureText>{item.eventTag.name}</FeatureText>
        </Feature>
      );
    }
    return <></>;
  }

  return (
    <FlatList
      listKey={'1'}
      style={{marginTop: 10}}
      numColumns={3}
      showsHorizontalScrollIndicator={false}
      data={features}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => <RenderFeature item={item} />}
    />
  );
}

export default Features;
