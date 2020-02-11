import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import Styled from 'styled-components/native';
import VectorIcon from "../../../components/VectorIcon";

const Container = Styled.View`
  background-color: #ffffff;
  margin-bottom: 15px;
  border-radius: 10px;
  width: 99.22%;
`;

const Wrapper = Styled.TouchableOpacity`
`;

const SubContainer = Styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
`;

const VenueName = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
`;

function VenueCard(props: any) {
  const {heading, push, address, description, banner, coords} = props;
  const {containerStyle} = styles;

  function handleOnPress() {
    push('Venue', {
      heading: heading,
      address: address,
      description: description,
      banner: banner,
      coords: coords,
    });
  }

  return (
    <Container style={styles.containerStyle}>
      <Wrapper>
        <SubContainer onPress={handleOnPress}>
          <VenueName>{heading}</VenueName>
          <VectorIcon name='carditem_Arrow' size={20}/>
        </SubContainer>
      </Wrapper>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.05,
        shadowRadius: 1.41,
      },
      android: {
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 3,
        elevation: 2,
        borderRadius: 12,
      },
    }),
  },
});

export default VenueCard;
