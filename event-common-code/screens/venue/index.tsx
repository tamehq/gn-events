import React from 'react';
import Styled from 'styled-components/native';
import Header from '../../components/Header';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Card} from 'native-base';
import VectorIcon from "../../components/VectorIcon";

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const SubContainer = Styled.ScrollView`
  max-width: 800px;
`;

const Wrapper = Styled.View`
  padding: 30px;
  justify-content: space-between;
  flex-grow: 1;
`;

const LocationInformation = Styled.View`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
`;

const LocationName = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 12px;
  font-family: ${props => props.theme.fontFamilies.regularFont};
  margin-left: 3px;
`;

const Seprator = Styled.View`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.color.borderLine};
  margin-top: 15px;
`;

const Heading = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 30px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  margin-top: 25px;
`;

const Content = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 20px;
  font-family: ${props => props.theme.fontFamilies.latoLight};
  font-weight: 300;
  margin-top: 15px;
`;

const Banner = Styled.Image`
  width: 100%;
  background-color: red;
  height: 200px;
  margin-bottom: 20px;
`;

const SubWrapper = Styled.View``;

function index({navigation}) {
  function goBack() {
    navigation.pop();
  }

  const address = navigation.getParam('address', '');
  const heading = navigation.getParam('heading', '');
  const description = navigation.getParam('description', '');
  const banner = navigation.getParam('banner', false);
  const coords = navigation.getParam('coords', {
    latitude: 55.672442,
    longitude: 12.621381,
  });

  return (
    <Container>
      <Header title={'Venue'} onPress={goBack} />
      <SubContainer contentContainerStyle={{flexGrow: 1}}>
        <Wrapper>
          <SubWrapper>
            <Card>
              <MapView
                initialRegion={{
                  ...coords,
                  latitudeDelta: 0.0005374134444835477,
                  longitudeDelta: 0.0035039708018285154,
                }}
                provider={PROVIDER_GOOGLE}
                style={{width: '100%', height: 200}}>
                <Marker
                  coordinate={{
                    ...coords,
                    latitudeDelta: 0.0222,
                    longitudeDelta: 0.0121,
                  }}
                />
              </MapView>
            </Card>
            <LocationInformation>
              <VectorIcon name="venuePin" size={20}/>
              <LocationName>{address}</LocationName>
            </LocationInformation>
            <Seprator />
            <Heading>{heading}</Heading>
            <Content>{description}</Content>
            {banner && banner.map(value => <Banner source={value} />)}
          </SubWrapper>
          {/* <Button style={{marginTop: 20}} label={'Get directions'} /> */}
        </Wrapper>
      </SubContainer>
    </Container>
  );
}

export default index;
