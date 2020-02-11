import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';
import Header from '../../../components/Header';
import DrawerItem from '../components/DrawerItem';
import VectorIcon from "../../../components/VectorIcon";

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
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

const KeynoteName = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
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
  background-color: ${props => props.theme.color.separator};
  height: 30px;
  margin-left: 13px;
  opacity: 0.31;
`;

function SpeakerDrawer({navigation}) {
  const [data] = React.useState(navigation.getParam('data'));
  const [activeIndex, setActiveIndex] = React.useState(
    navigation.getParam('index'),
  );
  const [timeZone] = React.useState(navigation.getParam('timeZone', 0));
  const [nextSpeaker, setNextSpeaker] = React.useState('');

  React.useEffect(() => {
    if (data.length > 1) {
      speakerName(navigation.getParam('index'));
    }
  }, []);

  function goToNextArticle() {
    const length = data.length - 1;
    if (activeIndex === length) {
      setActiveIndex(0);
      speakerName(0);
    } else {
      setActiveIndex(activeIndex + 1);
      speakerName(activeIndex + 1);
    }
  }

  function gotToPrevArticle() {
    const length = data.length - 1;
    if (activeIndex === 0) {
      setActiveIndex(length);
      speakerName(length);
    } else {
      setActiveIndex(activeIndex - 1);
      speakerName(activeIndex - 1);
    }
  }

  function speakerName(index: number) {
    let profile;
    let name = '';
    if (index < data.length - 1) {
      profile = data[index + 1];
    } else {
      profile = data[0];
    }
    if (profile.person) {
      if (profile.person) {
        name = profile.person.name.first + ' ' + profile.person.name.last;
        setNextSpeaker(name);
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
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <DrawerItem {...item} timeZone={timeZone} />
          )}
        />
        {data.length > 1 && (
          <NavigationView>
            <ControlView>
              <Controls>
                <LeftArrowPress onPress={gotToPrevArticle}>
                  <VectorIcon name='backarrow' size={20} />
                </LeftArrowPress>
                <HorizontalSeprator />
              </Controls>
              <KeynoteName numberOfLines={1}>{nextSpeaker}</KeynoteName>
              <RightArrowPress onPress={goToNextArticle}>
                <VectorIcon name='backarrow' size={20} />
              </RightArrowPress>
            </ControlView>
          </NavigationView>
        )}
      </Container>
    </SafeAreaView>
  );
}

export default SpeakerDrawer;
