import React from 'react';
import {Linking} from 'react-native';
import Styled from 'styled-components/native';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Header from '../../../components/Header';
import Input from '../../../components/InputText';
import Button from '../../../components/Button';
import config from '../../../config/';

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const SubContainer = Styled.ScrollView`
  max-width: 800px;
`;

const FormView = Styled.View`
  padding: 30px;
  justify-content: space-between;
  flex-grow: 1;
`;

const Form = Styled.View`
  margin-bottom: 15px;
`;

const InputText = Styled(Input)`
  margin-top: 20px;
`;

const Heading = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  text-align: center;
`;

const ButtonView = Styled.View``;

const UPDATE_ATTENDEE = gql`
  mutation updateAttendeeFromPlatform($input: UpdateAttendeePlatformInput!) {
    updateAttendeeFromPlatform(input: $input) {
      id
      name {
        first
        last
      }
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
    }
  }
`;

function EditProfile({navigation}) {
  const [updateAttendee] = useMutation(UPDATE_ATTENDEE);
  const [attendeeId] = React.useState(navigation.getParam('attendeeId', ''));
  const [name, setName] = React.useState(navigation.getParam('fName', ''));
  const [lastName, setLastName] = React.useState(
    navigation.getParam('lName', ''),
  );
  const [position, setPosition] = React.useState(
    navigation.getParam('companyPosition', ''),
  );
  const [company, setCompany] = React.useState(
    navigation.getParam('companyName', ''),
  );
  const [linkedIn, setLinkedIn] = React.useState(
    navigation.getParam('linkedIn', ''),
  );
  const [twitter, setTwitter] = React.useState(
    navigation.getParam('twitter', ''),
  );

  function goBack() {
    navigation.pop();
  }

  const saveProfile = () => {
    if (attendeeId) {
      console.log('in attendee', attendeeId, name, lastName, position, company);
      updateAttendee({
        variables: {
          input: {
            id: attendeeId,
            name: {
              first: name,
              last: lastName,
            },
            employment: {
              position: position,
              company: company,
            },
            contacts: {
              social: {
                linkedin: linkedIn,
                twitter: twitter,
              },
            },
          },
        },
      })
        .then(value => {
          console.log('updated value', value);
          navigation.getParam('refetch')();
          navigation.pop();
        })
        .catch(error => {
          console.log('mutation error', error);
        });
      console.log('mutation called');
    }
  };

  function editInBrowser() {
    let url = `https://app.tame.events/e/${config.EVENT_ID}?key=${attendeeId}`;
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  return (
    <Container>
      <Header onPress={goBack} title={'Edit Profile'} />
      <SubContainer contentContainerStyle={{flexGrow: 1}}>
        <FormView>
          <Form>
            <Heading>Contact information</Heading>
            <InputText
              placeholder={'First name'}
              style={{marginTop: 20}}
              value={name}
              onChangeText={setName}
            />
            <InputText
              placeholder={'Last name'}
              value={lastName}
              onChangeText={setLastName}
            />
            <InputText
              placeholder={'Positon'}
              value={position}
              onChangeText={setPosition}
            />
            <InputText
              placeholder={'Company'}
              value={company}
              onChangeText={setCompany}
            />
            <InputText
              placeholder={'Linkedin'}
              value={linkedIn}
              onChangeText={setLinkedIn}
            />
            <InputText
              placeholder={'Twitter'}
              value={twitter}
              onChangeText={setTwitter}
            />
          </Form>
          <ButtonView>
            <Button label={'Edit Sign-up'} onPress={editInBrowser} />
            <Button
              label={'Save profile information'}
              onPress={saveProfile}
              style={{marginTop: 10}}
            />
          </ButtonView>
        </FormView>
      </SubContainer>
    </Container>
  );
}

export default EditProfile;
