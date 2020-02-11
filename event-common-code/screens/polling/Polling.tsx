import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import Styled from 'styled-components/native';
import Header from '../../components/Header';
import VectorIcon from "../../components/VectorIcon";

const Container = Styled.View<{color: string}>`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const Wrapper = Styled.View`
  padding: 30px 30px 0px 30px;
`;

const Heading = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 18px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SessionView = Styled.TouchableOpacity`
  width: 100%;
  background-color: #ffffff;
  padding: 20px 15px 20px 15px;
  flex-direction: row;
  margin-bottom: 15px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
`;

const SessionText = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
`;

const Sessions = ['keynote', 'Fireside chat'];

function Polling(props) {
  const {containerStyle} = styles;

  const openPolling = title => {
    props.navigation.push('PollingTabs', {title: title});
  };

  return (
    <Container>
      <Header drawer navigation={props.navigation} backArrow={false} title={'Engagement'} />
      <Wrapper>
        <Heading>Sessions</Heading>
        {Sessions.map(session => (
          <SessionView
            onPress={() => openPolling(session)}
            style={containerStyle}>
            <SessionText>{session}</SessionText>
            <VectorIcon name='carditem_Arrow' size={20}/>
          </SessionView>
        ))}
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
        marginTop: 5,
        marginBottom: 10,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 15,
        elevation: 2,
        borderRadius: 12,
      },
    }),
  },
});

export default Polling;
