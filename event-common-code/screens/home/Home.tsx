import React from 'react';
import Styled from 'styled-components/native';
import Header from '../../components/Header';
import News from './container/NewsList';
import VenueList from './container/VenueList';
import {CH, CZ, DK, PH} from './data';
import Accordion from './container/AccordionContainer';
import BannerComponent from './components/Banner';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const SubContainer = Styled.ScrollView`
  max-width: 800px;
  flex-grow: 1;
`;

const Wrapper = Styled.View`
  padding: 30px 30px 0px 30px;
`;

const LatestNewsView = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const LatestNews = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 18px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  align-self: center;
`;

// const ViewAllOnPress = Styled.TouchableOpacity`
//   align-self: center;
// `;
//
// const ViewAllNews = Styled.Text`
//   color: ${props => props.theme.color.primary};
//   font-size: 12px;
//   font-family: ${props => props.theme.fontFamilies.extraBoldFont};
//   font-weight: 800;
//   text-decoration: underline;
//   text-align: right;
//   align-self: center;
// `;

const SubWrapper = Styled.View`
  padding: 0px 30px 0px 30px ;
`;

const Venue = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 18px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  margin-top: 20px;
`;

// const Faq = Styled.Text`
//   color: ${props => props.theme.color.charcoal};
//   font-size: 18px;
//   font-family: ${props => props.theme.fontFamilies.extraBoldFont};
//   font-weight: 800;
//   margin-top: 10px;
// `;

function Home(props) {
  const {navigation} = props;
  const activeEventId = navigation.getParam('activeEvent', '');

  return (
    <Container>
      <Header
        drawer
        backArrow={false}
        title={'NNIT Kickoff 2020'}
        navigation={navigation}
      />
      <SubContainer>
        <Wrapper>
          <BannerComponent activeEvent={activeEventId} />
          <LatestNewsView>
            <LatestNews>Latest News</LatestNews>
            {/* <ViewAllOnPress>
                <ViewAllNews>View all</ViewAllNews>
              </ViewAllOnPress> */}
          </LatestNewsView>
        </Wrapper>
        <News navigation={navigation} activeEvent={activeEventId} />
        <SubWrapper>
          {activeEventId === '98729393' && (
            <>
              <Venue>Venues</Venue>
              <VenueList navigation={navigation} data={DK} />
            </>
          )}
          {activeEventId === '104687458' && (
            <>
              <Venue>Venues</Venue>
              <VenueList navigation={navigation} data={CZ} />
            </>
          )}
          {activeEventId === '104690225' && (
            <>
              <Venue>Venues</Venue>
              <VenueList navigation={navigation} data={PH} />
            </>
          )}
          {activeEventId === '104687865' && (
            <>
              <Venue>Venues</Venue>
              <VenueList navigation={navigation} data={CH} />
            </>
          )}
          <>
            <Accordion activeEventId={activeEventId} />
          </>
        </SubWrapper>
      </SubContainer>
    </Container>
  );
}

export default Home;
