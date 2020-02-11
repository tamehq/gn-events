import React from 'react';
import {StackActions, NavigationActions} from 'react-navigation';
import {StatusBar} from 'react-native';
import Styled from 'styled-components/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Heading from '../../components/Heading';
import OnBoarding1 from '../../assets/images/onboarding/onboarding1.png';
import OnBoarding2 from '../../assets/images/onboarding/onboarding2.png';
import OnBoarding3 from '../../assets/images/onboarding/onboarding3.png';
import {ThemeContext} from "../../../App";

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.onBoardingBg};
`;

const SubContainer = Styled.View`
  padding: 30px;
  max-width: 800px;
`;

const CompanyName = Styled(Heading)`
  margin-top: 30px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-size: 20px;
  color: white;
  text-align: center;
`;

const Image = Styled.Image`
  margin-top: 20px;
  width: 100%;
  height: 400px;
  align-self: center;
`;

const SkipButton = Styled.Text`
  color: white;
  font-size: 14px;
  padding: 12px;
  align-self: center;
`;

const slides = [
  {
    key: 'somethun',
    title: 'The NNIT App ',
    text: `See latest news, practical information, programme and all your attendance details for the event.`,
    image: OnBoarding1,
  },
  {
    key: 'somethun1',
    title: `Explore & get inspired.`,
    text: `In the Programme you can get an overview of everything that’s happening, and add interesting sessions to My Programme.`,
    image: OnBoarding2,
  },
  {
    key: 'somethun2',
    title: `Edit your profile`,
    text: `Change and update your attendee details..\nupload your profile picture and more.`,
    image: OnBoarding3,
  },
];

interface OnBoardingInterface {
  navigation: any;
}

function OnBoarding(props: OnBoardingInterface) {
  const {navigation} = props;
  const theme = React.useContext(ThemeContext)

  function navigateToHome() {
    try {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'EventSelection'})],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      console.warn('Error in navigate to next verify token');
    }
  }

  function _renderItem({item, dimensions}) {
    const {title, text, image} = item;
    return (
      <Container>
        <StatusBar hidden={true} />
        <SubContainer>
          <CompanyName text={title} />
          <CompanyName
            style={{fontSize: 15, fontFamily: theme.fontFamilies.latoLight}}
            text={text}
          />
          <Image resizeMode={'contain'} source={image} />
        </SubContainer>
      </Container>
    );
  }

  function skipButton() {
    return <SkipButton>Skip</SkipButton>;
  }

  return (
    <AppIntroSlider
      buttonStyle={{backgroundColor: 'white'}}
      buttonTextStyle={{color: theme.color.onBoardingBg, fontSize: 14}}
      slides={slides}
      renderItem={_renderItem}
      showSkipButton
      bottomButton
      doneLabel={'Continue'}
      renderSkipButton={skipButton}
      onDone={navigateToHome}
      onSkip={navigateToHome}
    />
  );
}

export default OnBoarding;
