import React from 'react';
import {StyleSheet} from 'react-native';
import Styled from 'styled-components/native';
import QRCode from 'react-native-qrcode-svg';
import config from '../../../config/';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const Ticket = Styled.View`
  background-color: #5c5c5c;
  width: 100%;
  align-self: center;
  margin-top: 30px;
  padding: 30px 50px;
  margin-bottom: 30px;
`;

const QRCodeView = Styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const AttendeeView = Styled.View`
  width: 100%;
  align-items: center;
`;

const TicketTypeContainer = Styled.View`
  margin-bottom: 30px;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Dashes = Styled.View`
  border-color: ${props => props.theme.color.black};
  width: 100%;
  border-color: #ededed;
  border-width: 1px;
  position: absolute;
  top: 50%;
`;

const TicketType = Styled.View`
  padding: 5px 20px;
  align-items: center;
  border-radius: 999;
  border-width: 1px;
  border-color: #ededed;
  align-self: center;
  background-color: white;
`;

const TicketName = Styled.Text`
  color: rgb(51, 51, 48);
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
  text-align: center;
`;

const CircleRight = Styled.View`
  height: 25px;
  width: 25px;
  background-color: ${props => props.theme.color.screenBg};
  border-radius: 12.5px;
  position: absolute;
  right: -62.5px;
`;

const CircleLeft = Styled.View`
  height: 25px;
  width: 25px;
  background-color: ${props => props.theme.color.screenBg};
  border-radius: 12.5px;
  position: absolute;
  left: -62.5px;
`;

const AttendeeHeading = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 10px;
  font-weight: bold;
  line-height: 16px;
`;

const AttendeeName = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 18px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
`;

const GET_ATTENDEE_ID = gql`
  query attendeeByEmailAndEventId($email: String!, $eventId: String!) {
    attendeeByEmailAndEventId(email: $email, eventId: $eventId) {
      id
      name {
        first
        last
      }
    }
  }
`;

function TicketComponent(props) {
  const [attendeeId, setAttendeeId] = React.useState('');
  const [fName, setFName] = React.useState('');
  const [lName, setLName] = React.useState('');
  const [qrValue, setQRValue] = React.useState(
    JSON.stringify({
      event: config.EVENT_ID,
      attendee: '',
      name: '',
    }),
  );

  const {loading, error, data} = useQuery(GET_ATTENDEE_ID, {
    variables: {email: props.email, eventId: props.activeEvent},
  });

  React.useEffect(() => {
    try {
      setAttendeeId(props.attendeeId);
      setFName(props.fName);
      setLName(props.lName);
      if (data) {
        if (data.attendeeByEmailAndEventId) {
          setQRValue(
            JSON.stringify({
              event: props.activeEvent,
              attendee: data.attendeeByEmailAndEventId.id,
              name: props.fName + ' ' + props.lName,
            }),
          );
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  }, [data]);

  return (
    <Ticket style={styles.containerStyle}>
      <QRCodeView>
        <QRCode value={qrValue} />
      </QRCodeView>
      <TicketTypeContainer>
        <Dashes style={{borderBottomWidth: StyleSheet.hairlineWidth}} />
        <TicketType>
          <TicketName>Early Bird </TicketName>
        </TicketType>
        <CircleRight />
        <CircleLeft />
      </TicketTypeContainer>
      <AttendeeView>
        <AttendeeHeading>Attendee Name</AttendeeHeading>
        <AttendeeName>{fName + ' ' + lName}</AttendeeName>
      </AttendeeView>
    </Ticket>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
});

export default TicketComponent;
