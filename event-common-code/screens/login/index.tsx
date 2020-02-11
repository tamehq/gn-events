import React from 'react';
import {
  StatusBar,
  View,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import Styled from 'styled-components/native';
import NNITLog from '../../assets/images/logo-nnit/NNITRed.png';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import {login} from './module/api';
import {ThemeContext} from "../../../App";
import {isIphoneX} from "../../helpers/iPhonex";

const Container = Styled.ScrollView<{color: string}>`
  flex: 1;
  background-color: ${props => props.color};
`;

const SubContainer = Styled.View`
  padding: 30px;
  max-width: 800px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Logo = Styled.Image`
  margin-top: 130px;
  height: 150px;
  width: 150px;
`;

const Welcome = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  text-align: center;
  margin-top: 0px;
  width: 464px;
`;

const Description = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoLight};
  font-weight: 300;
  text-align: center;
  margin-top: 10px;
`;

const ErrorText = Styled.Text`
  font-size: 12px;
  color: red;
  align-self: flex-start;
  margin-top: 5px;
`;

interface Login {
  navigation: any;
}

const index = (props: Login) => {
  const theme = React.useContext(ThemeContext)
  const {navigation} = props;
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);
  // const [errorText, setErrorText] = React.useState('');

  function navigateToNext() {
    if (email) {
      navigation.push('VerifyToken', {email: email});
    }
  }

  async function loginUser() {
    const status: any = await login(email);
    if (status >= 200 && status <= 299) navigateToNext();
    else if (status.message) {
      setError(true);
      // setErrorText(`Please contact support@tame.events for more infomation.`);
    }
  }

  function handleTextChange(text) {
    if (error) {
      setError(false);
    }
    setEmail(text);
  }

  function openInBrowser() {
    try {
      let url = 'mailto:support@tame.events';
      Linking.openURL(url).catch(err =>
        console.error('An error occurred', err),
      );
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Container
        color='white'
        contentContainerStyle={{alignItems: 'center'}}>
        <SubContainer>
          <StatusBar hidden={true} />
          <Logo
            source={NNITLog}
            resizeMode={'contain'}
            isIphoneX={isIphoneX()}
          />
          <Welcome>{'Welcome to the NNIT\nEvent App.'}</Welcome>
          <Description>Please enter your e-mail to get started.</Description>
          <View style={{marginTop: 35}} />
          <InputText
            placeholder={'E-Mail'}
            value={email}
            onChangeText={handleTextChange}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
          />
          {error && (
            <>
              <ErrorText>
                <ErrorText>{`E-mail does not exist in the attendee list.\n`}</ErrorText>
                <ErrorText>{`Please contact `}</ErrorText>
                <ErrorText
                  onPress={openInBrowser}>{`support@tame.events`}</ErrorText>
                <ErrorText>{` for more information`}</ErrorText>
              </ErrorText>
            </>
          )}
          <Button
            label={'Continue'}
            color={theme.color.primary}
            labelColor={'#ffffff'}
            onPress={loginUser} // navigateToNext
            style={{marginTop: error ? 10 : 30, width: '100%'}}
          />
        </SubContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default index;
