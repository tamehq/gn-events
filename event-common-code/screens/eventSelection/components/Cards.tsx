import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Styled from 'styled-components/native';
import VectorIcon from "../../../components/VectorIcon";

const Container = Styled.TouchableOpacity`
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 15px 20px;
  border-radius: 10px;
`;

const Wrapper = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardDescription = Styled.View`
  max-width: 90%;
`;

const Title = Styled.Text`
  flex-wrap: wrap;
  color: ${props => props.theme.color.blackText};
  font-size: 20px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
`;

const Description = Styled.View`
`;

const Time = Styled.Text`
  color: ${props => props.theme.color.lightGray};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  margin-top: 5px;
`;

const Venue = Styled.Text`
  color: ${props => props.theme.color.lightGray};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  margin-top: 5px;
  flex-wrap: wrap;
`;

const ImageContainer = Styled.View`
  width: 10px;
  flex-basis: 10px;
  min-width: 10px;
`;

function CardComponent({id, title, time, address, navigation}: any) {
  console.log('event id, title', id, title);
  async function navigateToEvent() {
    try {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'Tabs',
            params: {activeEvent: id},
          }),
        ],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      console.warn('Error in navigate to next verify token');
    }
  }
  return (
    <Container style={styles.containerStyle} onPress={navigateToEvent}>
      <Wrapper>
        <CardDescription>
          <Title>{title}</Title>
          <Description>
            <Time>{time}</Time>
            <Venue>{address}</Venue>
          </Description>
        </CardDescription>
        <ImageContainer>
          <VectorIcon name='carditem_Arrow' size={16} />
        </ImageContainer>
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
        shadowOffset: {width: 10, height: 10},
        shadowRadius: 3,
        elevation: 2,
        borderRadius: 12,
      },
    }),
  },
});

export default CardComponent;
