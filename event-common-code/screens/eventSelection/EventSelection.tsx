import React from 'react';
import {ActivityIndicator} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Styled from 'styled-components/native';
import Header from '../../components/Header';
import config from '../../config';
import AsyncStorage from '@react-native-community/async-storage';
import Event from './components/Event';
import {ThemeContext} from "../../../App";
import {getAuthReq} from "../../api";

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const Wrapper = Styled.ScrollView`
`;

const CardContainer = Styled.View`
  padding: 30px 30px 10px 30px;
`;

const LoadingContainer = Styled.View`
  flex: 1;
  justify-content: center;
`;

const Headline = Styled.Text`
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  text-align: center;
`;

const Subheader = Styled.Text`
  fontFamily: ${props => props.theme.fontFamilies.latoLight};
  fontSize: 20;
  color: ${props => props.theme.color.blackText};
  fontWeight: 300;
  textAlign: center;
`;

function EventSelectionComponent(props) {
  const theme = React.useContext(ThemeContext)
  const [eventIDs, setEventIDs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    const events: string[] = [
      '104686979',
      '98729393',
      '104690225',
      '104687865',
      '104687458',
      '27998856',
    ];
    // const token = await AsyncStorage.getItem('token');
    const email = await AsyncStorage.getItem('email');
    if (email) {
      const ids = await getAuthReq(
        `${config.API_ROOT}/eventAttendeesevents/${email}`,
      );
      if (ids) {
        let activeIds = ids.filter(eventId => {
          if (events.indexOf(eventId) > -1) {
            return true;
          }
        });
        setEventIDs(activeIds);
      }
      setLoading(false);
    } else {
      Logout();
    }
  }

  async function Logout() {
    try {
      await AsyncStorage.clear();
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Splash'})],
      });
      props.navigation.dispatch(resetAction);
    } catch (error) {
      console.warn('Error in navigate to next verify token');
    }
  }

  if (loading) {
    return (
      <Container style={{justifyContent: 'center'}}>
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.color.primary} />
        </LoadingContainer>
      </Container>
    );
  }

  if (!loading && eventIDs.length === 0) {
    return (
      <Container>
        <Header title={'Events'} backArrow={false} />
        <Container style={{justifyContent: 'center'}}>
          <Headline>No events available</Headline>
          <Subheader>
            Only events where you are added to the attendees list will be shown
            here
          </Subheader>
        </Container>
      </Container>
    );
  }

  return (
    <Container>
      <Header title={'Events'} backArrow={false} />
      <Wrapper>
        <CardContainer>
          {eventIDs.map(id => (
            <Event eventId={id} navigation={props.navigation} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
}

export default EventSelectionComponent;
