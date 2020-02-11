import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import Header from '../../../components/Header';
import DrawerItem from './PartnersProfile';
import LeftImage from '../../../../src/assets/images/arrow-back.png';
import RightImage from '../../../../src/assets/images/arrow-right.png';

const Container = Styled.View`
  flex: 1;
  background-color: #f7f7f7;
`;

const NavigationView = Styled.View`
  width: 100%;
  padding: 0px 30px 0px 30px;
  background-color: #ffffff;
  height: 50px;
  justify-content: center;
`;

const Controls = Styled.View`
  flex-direction: row;
`;

const ControlView = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* padding-top: 14px;
  padding-bottom: 14px; */
  align-items: center;
`;

const Image = Styled.Image`
  width: 20px;
  height: 20px;
  align-self: center;
`;

const KeynoteName = Styled.Text`
  color: rgb(0, 0, 0);
  font-size: 15px;
  font-family: Lato-Bold;
  font-weight: bold;
  width: 200px;
  text-align: center;
`;

const LeftArrowPress = Styled.TouchableOpacity`
  align-self: center;
`;

const RightArrowPress = Styled.TouchableOpacity`
  align-self: center;
`;

const HorizontalSeprator = Styled.View`
  width: 1;
  background-color: rgb(150, 150, 150);
  height: 30px;
  margin-left: 13px;
  opacity: 0.31;
`;

function SpeakerDrawer({navigation}) {
  const [data] = React.useState(navigation.getParam('data'));
  const [activeIndex, setActiveIndex] = React.useState(
    navigation.getParam('index'),
  );
  const [nextCompany, setNextCompany] = React.useState('');
  const [title] = React.useState(navigation.getParam('title', ''));

  React.useEffect(() => {
    if (data.length > 1) {
      companyName(navigation.getParam('index'));
    }
  }, []);

  function goToNextCompany() {
    const length = data.length - 1;
    if (activeIndex === length) {
      setActiveIndex(0);
      companyName(0);
    } else {
      setActiveIndex(activeIndex + 1);
      companyName(activeIndex + 1);
    }
  }

  function gotToPrevCompany() {
    const length = data.length - 1;
    if (activeIndex === 0) {
      setActiveIndex(length);
      companyName(length);
    } else {
      setActiveIndex(activeIndex - 1);
      companyName(activeIndex - 1);
    }
  }

  function companyName(index: number) {
    let company;
    let name = '';
    if (index < data.length - 1) {
      company = data[index + 1];
    } else {
      company = data[0];
    }
    if (company.company) {
      if (company.company.title) {
        name = company.company.title;
        setNextCompany(name);
      }
    }
  }

  function goBack() {
    navigation.pop();
  }

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'never'}}>
      <Container>
        <Header title={'Speakers'} onPress={goBack} />
        <FlatList
          extraData={activeIndex}
          data={[data[activeIndex]]}
          keyExtractor={(item: any, index) => item.id || index.toString()}
          renderItem={({item}) => <DrawerItem title={title} {...item} />}
        />
        {data.length > 1 && (
          <NavigationView>
            <ControlView>
              <Controls>
                <LeftArrowPress onPress={gotToPrevCompany}>
                  <Image source={LeftImage} resizeMode={'contain'} />
                </LeftArrowPress>
                <HorizontalSeprator />
              </Controls>
              <KeynoteName numberOfLines={1}>{nextCompany}</KeynoteName>
              <RightArrowPress onPress={goToNextCompany}>
                <Image source={RightImage} resizeMode={'contain'} />
              </RightArrowPress>
            </ControlView>
          </NavigationView>
        )}
      </Container>
    </SafeAreaView>
  );
}

export default SpeakerDrawer;
