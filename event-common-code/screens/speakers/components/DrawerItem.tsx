import React from 'react';
import {Linking} from 'react-native';
import Styled from 'styled-components/native';
import moment from 'moment';
import VectorIcon from "../../../components/VectorIcon";

const SubContainer = Styled.ScrollView`
  padding: 25px 30px 30px 30px;
`;

const Avatar = Styled.Image`
  width: 85px;
  height: 85px;
  align-self: center;
`;

const DescriptionContainer = Styled.View`
`;

const Heading = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

const Description = Styled.Text`
  color: ${props => props.theme.color.lightGray};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  font-weight: bold;
  text-align: center;
  line-height: 20px;
`;

const SocialContainer = Styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 15px;
`;

const SocialIcon = Styled(VectorIcon)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  margin-left: 5px;
`;

const SocialIconPress = Styled.TouchableOpacity``;

const Seprator = Styled.View`
  height: 1px;
  background-color: #979797;
  width: 100%;
  margin-top: 15px;
  opacity: 0.35;
`;

const ContentView = Styled.View`
  margin-top: 15px;
`;

const Content = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 20px;
  font-family: ${props => props.theme.fontFamilies.latoLight};
  font-weight: 300;
  line-height: 23px;
`;

const NoAvatar = Styled.View`
  width: 85px;
  height: 85px;
  border-radius: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const FirstLetter = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 30px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  text-align: center;
`;

const SessionList = Styled.View`
  margin-top: 30px;
`;

const SessionView = Styled.View`
  margin-top: 20px;
`;

const SessionTimeView = Styled.View`
  flex-direction: row;
`;

const SessionTime = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 10px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
`;

const SessionName = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 18px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
`;

const SessionDate = Styled.Text`
  color: rgb(157, 157, 157);
  font-size: 10px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  text-transform: uppercase;
`;

interface DrawerItemInterface {
  contacts: {
    email: string;
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
      skype: string;
      snapchat: string;
      twitter: string;
      website: string;
    };
  };
  employment: {
    position: string;
    company: string;
  };
  images: {
    profile?: string;
  };
  metadata: {};
  person: {
    employment: {
      position: string;
      company: string;
    };
    images: {
      profile?: string;
    };
    name: {
      first: string;
      last: string;
    };
    _id: string;
    _key: string;
  };
  bio: string;
  sessions: any[];
  timeZone: number;
}

function Drawer(props: DrawerItemInterface) {
  const {person, contacts, bio, sessions, timeZone} = props;
  const [firstLetter, setFirstLetter] = React.useState('');

  const openUrl = url => {
    if (url.includes('http://') || url.includes('https://'))
      Linking.openURL(url).catch(err => console.warn('An error occurred', err));
    else
      Linking.openURL('https://' + url).catch(err =>
        console.warn('An error occurred', err),
      );
  };

  React.useEffect(() => {
    if (person.name) {
      if (person.name.first !== undefined) getFirstLetter(person.name.first);
    }
  }, [person]);

  const getFirstLetter = (name: string) =>
    setFirstLetter(name.charAt(0).toUpperCase());

  const convertTime = time =>
    moment(time)
      .utc()
      .add(timeZone, 'minutes')
      .format('HH:mm');

  const getDate = time => moment.utc(time).format('MMM DD');
  try {
    if (sessions.length > 1) {
      sessions.sort(function(a, b) {
        return new Date(a.finish) - new Date(b.finish);
      });
    }
  } catch (error) {
    console.log('speaker session sorting error', error);
  }
  return (
    <SubContainer contentContainerStyle={{flexGrow: 1}}>
      {person && (
        <>
          {person.images && (
            <Avatar source={{uri: person.images.profile}} borderRadius={10} />
          )}
          {!person.images && (
            <NoAvatar>
              <FirstLetter>{firstLetter}</FirstLetter>
            </NoAvatar>
          )}
          {person.name && (
            <DescriptionContainer>
              <Heading>
                {person.name.first.length > 0 && (
                  <Heading>{person.name.first}</Heading>
                )}
                {person.name.last.length > 0 && (
                  <Heading> {person.name.last}</Heading>
                )}
              </Heading>
              {person.employment && (
                <Description>
                  <>
                    {person.employment.position !== undefined &&
                      person.employment.position.length > 0 && (
                        <Description numberOfLines={1}>
                          {person.employment.position}
                        </Description>
                      )}
                    {person.employment.position !== undefined &&
                      person.employment.position.length > 0 &&
                      person.employment.company !== undefined &&
                      person.employment.company.length > 0 && (
                        <Description numberOfLines={1}>{', '}</Description>
                      )}
                    {person.employment.company !== undefined && (
                      <Description numberOfLines={1}>
                        {person.employment.company}
                      </Description>
                    )}
                  </>
                </Description>
              )}
            </DescriptionContainer>
          )}
          {contacts && contacts.social && (
            <SocialContainer>
              {contacts.social.facebook !== undefined &&
                contacts.social.facebook.length > 0 && (
                  <SocialIconPress
                    onPress={() => openUrl(contacts.social.facebook)}>
                    <SocialIcon name='facebook' size={24}/>
                  </SocialIconPress>
                )}
              {contacts.social.linkedin !== undefined &&
                contacts.social.linkedin.length > 0 && (
                  <SocialIconPress
                    onPress={() => openUrl(contacts.social.linkedin)}>
                    <SocialIcon name='linkedin' size={24}/>
                  </SocialIconPress>
                )}
              {contacts.social.twitter !== undefined &&
                contacts.social.twitter.length > 0 && (
                  <SocialIconPress
                    onPress={() => openUrl(contacts.social.twitter)}>
                    <SocialIcon name='twitter' size={24}/>
                  </SocialIconPress>
                )}
              {contacts.social.website !== undefined &&
                contacts.social.website.length > 0 && (
                  <SocialIconPress
                    onPress={() => openUrl(contacts.social.website)}>
                    <SocialIcon name='website' size={24}/>
                  </SocialIconPress>
                )}
            </SocialContainer>
          )}
          <Seprator />
          {bio && (
            <ContentView>
              {bio.length > 0 && <Content>{bio}</Content>}
            </ContentView>
          )}
          <SessionList>
            {sessions.length > 0 &&
              sessions.map(session => {
                const startTime = convertTime(session.start);
                const endTime = convertTime(session.finish);
                const date = getDate(session.start);
                var roomName;
                if (session.roomName !== undefined) roomName = session.roomName;
                return (
                  <SessionView>
                    <SessionTimeView>
                      <SessionTime>{startTime}</SessionTime>
                      <SessionTime> {'-'} </SessionTime>
                      <SessionTime>{endTime}</SessionTime>
                      <SessionDate> {' ' + date}</SessionDate>
                      {roomName && (
                        <>
                          <SessionDate>{'-'}</SessionDate>
                          <SessionDate>{roomName}</SessionDate>
                        </>
                      )}
                    </SessionTimeView>
                    <SessionName>{session.title}</SessionName>
                  </SessionView>
                );
              })}
          </SessionList>
        </>
      )}
    </SubContainer>
  );
}

export default Drawer;
