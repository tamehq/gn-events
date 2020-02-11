import React from 'react';
import Styled from 'styled-components/native';
import Header from '../../components/Header';

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const SubContainer = Styled.ScrollView`
  max-width: 800px;
`;

const Wrapper = Styled.View`
  padding: 30px;
`;

const NewsImage = Styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 5px;
`;

const EventDetails = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
`;

const Company = Styled.View`
  flex-direction: row;
  align-items: center;
`;

const Logo = Styled.Image`
  width: 30px;
  height: 30px;
`;

const EventVicinity = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  font-weight: normal;
  margin-left: 5px;
`;

const DateAndTime = Styled.View`
  flex-direction: row;
  align-items: center;
`;

const Date = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  font-weight: normal;
  text-align: right;
`;

const Time = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 13px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  font-weight: normal;
  text-align: right;
  opacity: 0.3;
  margin-left: 5px;
`;

const Seprator = Styled.View`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.color.borderLine};
`;

const Heading = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: bold;
  line-height: 25px;
  margin-top: 25px;
`;

const Article = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 17px;
  font-family: ${props => props.theme.fontFamilies.latoLight};
  font-weight: 300;
  line-height: 25px;
  margin-top: 10px;
`;

function index({navigation}) {
  const [heading] = React.useState(navigation.getParam('heading'));
  const [description] = React.useState(navigation.getParam('description'));
  const [date] = React.useState(navigation.getParam('date'));
  const [time] = React.useState(navigation.getParam('time'));
  const [banner] = React.useState(navigation.getParam('banner'));
  const [logo] = React.useState(navigation.getParam('logo'));

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header title={'News & Updates'} onPress={goBack} />
      <SubContainer contentContainerStyle={{flexGrow: 1}}>
        <Wrapper>
          <NewsImage source={banner} resizeMode={'cover'} />
          <EventDetails>
            <Company>
              <Logo source={logo} resizeMode={'contain'} />
              <EventVicinity>Global Events</EventVicinity>
            </Company>
            <DateAndTime>
              <Date>{date}</Date>
              <Time>{time}</Time>
            </DateAndTime>
          </EventDetails>
          <Seprator />
          <Heading>{heading}</Heading>
          <Article>{description}</Article>
        </Wrapper>
      </SubContainer>
    </Container>
  );
}

export default index;
