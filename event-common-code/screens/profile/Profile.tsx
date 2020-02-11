import React from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Styled from 'styled-components/native';
import Header from '../../components/Header';
import Avatar from './components/Avatar';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Ticket from './components/Ticket';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import AsyncStorage from '@react-native-community/async-storage';
import {ThemeContext} from "../../../App";
const jwt_decode = require('jwt-decode');

const Container = Styled.View<{color: string}>`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const Wrapper = Styled.ScrollView`
`;

const SubContainer = Styled.View`
  flex-grow: 1;
  padding: 30px;
  justify-content: space-between;
`;

const FormView = Styled.View``;

const Name = Styled(Heading)`
  margin-top: 30px;
`;

const LoadingContainer = Styled.View`
  flex: 1;
  justify-content: center;
`;

const ButtonView = Styled.View``;

interface ProfileInterface {
  navigation: any;
}

const GET_ATTENDEE = gql`
  query Attendee($attendeeId: ID!) {
    attendee(attendeeId: $attendeeId) {
      name {
        first
        last
      }
      eventId
      employment {
        position
        company
      }
      contacts {
        social {
          linkedin
          twitter
        }
      }
      imageUri
    }
  }
`;

function Profile(props: ProfileInterface) {
  const {navigation} = props;
  const theme = React.useContext(ThemeContext)
  const [attendeeId, setAttendeeId] = React.useState('');
  const [fName, setFName] = React.useState('');
  const [lName, setLName] = React.useState('');
  const [employment, setemployment] = React.useState({
    position: '',
    company: '',
  });
  const [linkedIn, setLinkedIn] = React.useState('');
  const [twitter, setTwitter] = React.useState('');
  const [imageUri, setImageUri] = React.useState('');
  const {loading, data, refetch} = useQuery(GET_ATTENDEE, {
    variables: {attendeeId: attendeeId},
  });
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    if (loading) {
      (async function() {
        try {
          const token = await AsyncStorage.getItem('token');
          if (token !== null) {
            var decoded = jwt_decode(token);
            console.log('decoded, ', decoded, 'orignal', token);
            setAttendeeId(decoded.attendeeId);
          }
          const storageEmail = await AsyncStorage.getItem('email');
          if (storageEmail !== null) {
            setEmail(storageEmail);
          }
        } catch (error) {
          console.log('profile error', error);
        }
      })();
    }
    if (!loading) {
      if (data.attendee) {
        setFName(data.attendee.name.first);
        setLName(data.attendee.name.last);
        setemployment(data.attendee.employment);
        if (data.attendee.contacts) {
          setLinkedIn(data.attendee.contacts.social.linkedin);
          setTwitter(data.attendee.contacts.social.twitter);
        }
        if (data.attendee.imageUri) {
          setImageUri(data.attendee.imageUri);
        }
      }
    }
  }, [data]);

  function goBack() {
    navigation.pop();
  }

  function goToEdit() {
    navigation.push('EditProfile', {
      fName: fName,
      lName: lName,
      companyName: employment.company,
      companyPosition: employment.position,
      attendeeId: attendeeId,
      refetch: refetch,
      linkedIn: linkedIn,
      twitter: twitter,
    });
  }

  async function Logout() {
    try {
      await AsyncStorage.clear();
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Splash'})],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      console.warn('Error in navigate to next verify token');
    }
  }

  function switchEvents() {
    try {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'EventSelection',
          }),
        ],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      console.warn('Error in navigate to next verify token');
    }
  }

  const activeEventId = navigation.getParam('activeEvent', '');

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.color.screenBg}}
      forceInset={{top: 'never'}}>
      {loading && (
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.color.primary} />
        </LoadingContainer>
      )}
      {!loading && (
        <Container color={theme.color.screenBg}>
          <Header
            drawer
            navigation={navigation}
            backArrow={false}
            title={'Profile'}
            onPress={goBack}
          />
          <Wrapper contentContainerStyle={{flexGrow: 1}}>
            <SubContainer>
              <FormView>
                <Avatar attendeeId={attendeeId} imageUri={imageUri} />
                <Name text={fName + ' ' + lName} />
              </FormView>
              <Ticket
                activeEvent={activeEventId}
                fName={fName}
                lName={lName}
                attendeeId={attendeeId}
                email={email}
              />
              <ButtonView>
                <Button
                  onPress={goToEdit}
                  label={'Edit profile information'}
                  style={{alignSelf: 'center', marginTop: 15}}
                />
                <Button
                  onPress={switchEvents}
                  label={'Switch events'}
                  style={{alignSelf: 'center', marginTop: 10}}
                />
                <Button
                  onPress={Logout}
                  label={'Logout'}
                  style={{alignSelf: 'center', marginTop: 10}}
                />
              </ButtonView>
            </SubContainer>
          </Wrapper>
        </Container>
      )}
    </SafeAreaView>
  );
}

export default Profile;
