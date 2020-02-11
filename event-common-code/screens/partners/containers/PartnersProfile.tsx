import React, {useState} from 'react';
import {Linking} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {
  Container,
  Name,
  ProfileContainer,
  SocialButtons,
  TextContainer,
  BioText,
  RaisedImage,
  NoAvatar,
  Image,
  FirstLetter,
  SocialIcon,
  Dropdown,
  Feature,
  FeatureText,
} from './StyledComponents';
import Icon from 'react-native-vector-icons/Ionicons';
import {capitalize} from 'lodash';
import {PLACEHOILDER} from '../../../../src/themes';
import VectorIcon from '../../../components/VectorIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ThemeContext} from "../../../../App";

const AttendeeProfile = (props: any) => {
  const theme = React.useContext(ThemeContext)
  const {company, social} = props;
  const {title = '', imageUri, description = ''} = company;

  const [textHeight, setTextHeight] = useState(theme.HP('30'));
  // const [attendee] = React.useState([]);
  const {linkedin = '', twitter = '', facebook = ''} = social || {};

  const {website} = company;

  const onLinkClick = link => {
    if (link.includes('http://') || link.includes('https://'))
      Linking.openURL(link).catch(err =>
        console.warn('An error occurred', err),
      );
    else
      Linking.openURL('https://' + link).catch(err =>
        console.warn('An error occurred', err),
      );
  };

  const onDropdownPress = () => {
    if (textHeight) {
      // @ts-ignore
      setTextHeight(null);
    } else {
      setTextHeight(theme.HP('30'));
    }
  };
  const getFirstLetter = () => (title ? title.charAt(0).toUpperCase() : '');
  const openUrl = url => {
    if (url.includes('http://') || url.includes('https://'))
      Linking.openURL(url).catch(err => console.warn('An error occurred', err));
    else
      Linking.openURL('https://' + url).catch(err =>
        console.warn('An error occurred', err),
      );
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.color.screenBg}}
      forceInset={{top: 'never'}}>
      <KeyboardAwareScrollView contentContainerStyle={{minHeight: theme.HP('85')}}>
        <Container>
          <ProfileContainer>
            {!!imageUri ? (
              <RaisedImage>
                <Image source={{uri: imageUri || PLACEHOILDER}} />
              </RaisedImage>
            ) : (
              <NoAvatar>
                <FirstLetter>{getFirstLetter()}</FirstLetter>
              </NoAvatar>
            )}
            <Name>{capitalize(title)}</Name>
            <Feature>
              <FeatureText>{props.title}</FeatureText>
            </Feature>
            <SocialButtons>
              {!!facebook && (
                <SocialIcon onPress={() => onLinkClick(facebook)}>
                  <VectorIcon
                    name="facebook"
                    size={30}
                    color={theme.color.primary}
                  />
                </SocialIcon>
              )}
              {!!twitter && (
                <SocialIcon onPress={() => onLinkClick(twitter)}>
                  <VectorIcon
                    name="twitter"
                    size={30}
                    color={theme.color.primary}
                  />
                </SocialIcon>
              )}
              {!!linkedin && (
                <SocialIcon onPress={() => onLinkClick(linkedin)}>
                  <VectorIcon
                    name="linkedin"
                    size={30}
                    color={theme.color.primary}
                  />
                </SocialIcon>
              )}
              {!!website && (
                <SocialIcon onPress={() => openUrl(website)}>
                  <VectorIcon
                    name="website"
                    size={30}
                    color={theme.color.primary}
                  />
                </SocialIcon>
              )}
            </SocialButtons>
          </ProfileContainer>
          <TextContainer style={{maxHeight: textHeight}}>
            <BioText>{description || ''}</BioText>
            {!!description && description.length > 100 && (
              <Dropdown activeOpacity={0.8} onPress={onDropdownPress}>
                <Icon
                  name={textHeight ? 'ios-arrow-down' : 'ios-arrow-down'}
                  size={18}
                  color={theme.color.blackText}
                />
              </Dropdown>
            )}
          </TextContainer>
        </Container>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AttendeeProfile;
