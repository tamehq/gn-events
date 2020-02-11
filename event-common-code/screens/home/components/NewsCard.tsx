import React from 'react';
import Styled from 'styled-components/native';
import {Platform, StyleSheet} from 'react-native';
import {ViewNewsInterface} from '../Container/NewsList';

const Container = Styled.TouchableOpacity`
  width: 180px;
  background-color: #ffffff;
  margin-right: 10px;
  border-radius: 10px;
`;

const SubView = Styled.View`
  padding: 15px;
`;

const Banner = Styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 5px;
`;

const Date = Styled.Text`
  color: ${props => props.theme.color.lightGray};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  font-weight: normal;
  margin-top: 10px;
`;

const Heading = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 17px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  margin-top: 5px;
  line-height: 17px;
`;

const Content = Styled.Text`
  margin-top: 3px;
  color: ${props => props.theme.color.blackText};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.latoLight};
  font-weight: 300;
`;

function Card(props: ViewNewsInterface | any) {
  const {navigation, activeEvent, index} = props;
  const {image, date, heading, description, time, banner, logo} = props.item;
  const {containerStyle} = styles;

  function openNews() {
    if (activeEvent == '98729393' && index == 0) {
      navigation.push('DKNews', {
        heading: heading,
        description: description,
        date: date,
        time: time,
        banner: banner,
        logo: logo,
      });
    } else {
      navigation.push('News', {
        heading: heading,
        description: description,
        date: date,
        time: time,
        banner: banner,
        logo: logo,
      });
    }
  }

  return (
    <Container style={containerStyle} onPress={openNews}>
      <SubView>
        <Banner resizeMode={'cover'} source={image} />
        <Date>{date}</Date>
        <Heading numberOfLines={3}>{heading}</Heading>
        <Content numberOfLines={3}>{description}</Content>
      </SubView>
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
        marginLeft: 5,
      },
      android: {
        marginTop: 5,
        marginBottom: 10,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 15,
        elevation: 2,
        borderRadius: 12,
        marginLeft: 5,
      },
    }),
  },
});

export default Card;
