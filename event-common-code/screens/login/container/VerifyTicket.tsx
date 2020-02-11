import React from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {StatusBar, View, KeyboardAvoidingView, Platform} from 'react-native';
import {verifyEventCode} from '../module/api';
import {isIphoneX} from '../../../helpers/iPhonex';
import Styled from 'styled-components/native';
import NNITLog from '../../../assets/images/logo-nnit/NNITRed.png';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../../components/Header';
import {ThemeContext} from "../../../../App";

const Container = Styled.ScrollView<{color: string}>`
  flex: 1;
  background-color: ${props => props.color};
`;

const SubContainer = Styled.View`
  padding: 0px 30px;
  max-width: 800px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Logo = Styled.Image`
  margin-top: 80px;
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

interface VerifyTicketInterface {
  navigation: any;
}

const VerifyTicket = (props: VerifyTicketInterface) => {
  const theme = React.useContext(ThemeContext)
  const {navigation} = props;
  const [eventCode, setEventCode] = React.useState('');
  const [error, setError] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');

  async function verifyToken() {
    try {
      let email = props.navigation.getParam('email');
      let status: any = await verifyEventCode(email, eventCode);
      const {statusCode, token} = status;
      if (statusCode === 401) {
        setError(true);
        setErrorText(`The event code does not exist.
Please make sure you entered it correctly.`);
      } else if (token) {
        navigateToNext(token, email);
      }
    } catch (error) {
      console.warn('Error in verification code');
    }
  }

  function handleTextChange(text) {
    if (error) {
      setError(false);
    }
    setEventCode(text);
  }

  async function navigateToNext(token, email) {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('email', email);
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'OnBoarding'})],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      console.warn('Error in navigate to next verify token');
    }
  }

  function handleBackPress() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Header backArrow onPress={handleBackPress} />
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
          <Welcome>{'You got mail.'}</Welcome>
          <Description>
            {'Please check your e-mail.\nWe have sent you a unique event code.'}
          </Description>
          <View style={{marginTop: 35}} />
          <InputText
            placeholder={'Add event code'}
            value={eventCode}
            onChangeText={handleTextChange}
          />
          {error && <ErrorText>{errorText}</ErrorText>}
          <Button
            style={{marginTop: error ? 10 : 30, width: '100%'}}
            label={'Continue'}
            color={theme.color.primary}
            labelColor={'#ffffff'}
            onPress={verifyToken} // navigateToNext
          />
        </SubContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default VerifyTicket;
