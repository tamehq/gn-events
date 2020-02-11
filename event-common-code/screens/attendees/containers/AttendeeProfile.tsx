import React, {useState} from 'react';
import {SafeAreaView} from 'react-navigation';
import {
    Container, Name, Designation, ProfileContainer, SocialButtons, TextContainer, BioText,
    RaisedImage, NoAvatar, Image, FirstLetter, SocialIcon, SubContainer, Dropdown
} from './StyledComponents'
import Header from "../../../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import {capitalize} from "lodash";
import VectorIcon from "../../../components/VectorIcon";
import ButtonComponent from "../../../components/Button";
import {web} from "react-native-communications";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ThemeContext} from "../../../../App";

const AttendeeProfile = (props: any) => {
  const theme = React.useContext(ThemeContext)

  const {navigation} = props;
  const [textHeight, setTextHeight] = useState(theme.HP('30'))
  const [attendee] = React.useState(navigation.getParam('attendee'));
  const {name, imageUri, employment, description, contacts} = attendee || {}
  const { social: {linkedin = '', twitter = '', facebook = '' } = {} } = contacts || {}
  const {first = '', last = ''} = name || {}
  const {position = '', company = ''} = employment || {}

  const onLinkClick = (link) => {
      web(link)
    }

  const onDropdownPress = () => {
      if (textHeight) {
          // @ts-ignore
        setTextHeight(null)
      } else {
          setTextHeight(theme.HP('30'))
      }
  }
  const getFirstLetter = () => first ? first.charAt(0).toUpperCase() : ''
  const concatStr = (a, b) => a ? `${capitalize(a)}${b ? ', ' + capitalize(b) : '' }` : ''


  return (
      <SafeAreaView style={{flex: 1, backgroundColor: theme.color.screenBg }} forceInset={{top: 'never'}}>
        <Header title={'Attendees'} backArrow={true} onPress={() => navigation.pop()} />
        <KeyboardAwareScrollView contentContainerStyle={{ minHeight: theme.HP('85')}}>
            <Container>
                <ProfileContainer
                  style={(!description && (!facebook && !twitter && !linkedin )) ? {borderBottomColor: 'transparent'} : {}}>
                    {!!(imageUri) ?
                        <RaisedImage>
                            <Image source={{uri: imageUri || null}}/>
                        </RaisedImage>
                        : <NoAvatar>
                            <FirstLetter>{getFirstLetter()}</FirstLetter>
                        </NoAvatar>
                    }
                    <Name>{capitalize(first)} {capitalize(last)}</Name>
                    <Designation>{concatStr(position, company)}</Designation>
                    <SocialButtons>
                        {!!facebook &&
                        <SocialIcon onPress={() => onLinkClick(facebook)}>
                            <VectorIcon name='facebook' size={30} color={theme.color.primary}/></SocialIcon>}
                        {!!twitter &&
                        <SocialIcon onPress={() => onLinkClick(twitter)}>
                            <VectorIcon name='twitter' size={30} color={theme.color.primary}/></SocialIcon>}
                        {!!linkedin &&
                        <SocialIcon onPress={() => onLinkClick(linkedin)}>
                            <VectorIcon name='linkedin' size={30} color={theme.color.primary}/></SocialIcon>}
                    </SocialButtons>
                </ProfileContainer>
                <TextContainer style={{ maxHeight: textHeight }}>
                    <BioText>
                        {description || ''}
                     </BioText>
                    {!!description && description.length > 100 &&
                    <Dropdown activeOpacity={0.8} onPress={onDropdownPress}>
                        <Icon name={textHeight ? 'ios-arrow-down' : 'ios-arrow-down'} size={18} color={theme.color.blackText} />
                    </Dropdown>}
                </TextContainer>
            </Container>
        </KeyboardAwareScrollView>
          <SubContainer style={{ paddingHorizontal: 30, paddingVertical: 10 }}>
              <ButtonComponent icon='chat' label='Message' style={{ marginBottom: 10 }}/>
              <ButtonComponent icon='meeting' label='Send meeting request'/>
          </SubContainer>
      </SafeAreaView>
  );
}

export default AttendeeProfile;
