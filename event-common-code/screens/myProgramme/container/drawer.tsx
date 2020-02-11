import React from 'react';
import {FlatList} from 'react-native';
import Content from '../components/drawerContent';
import Styled from 'styled-components/native';
import Header from '../../../components/Header';
import {isIphoneX} from '../../../helpers/iPhonex';
import VectorIcon from "../../../components/VectorIcon";

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
  justify-content: space-between;
  padding-bottom: ${isIphoneX() ? 20 : 0};
`;

const NavigationView = Styled.View`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
`;

const Controls = Styled.View`
  flex-direction: row;
`;

const ControlView = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 15px;
  align-items: center;
`;

const Seprator = Styled.View`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.color.separator};
  margin-top: 15px;
`;

const Image = Styled.Image`
  width: 20px;
  height: 20px;
  align-self: center;
`;

const HorizontalSeprator = Styled.View`
  height: 100%;
  width: 1;
  background-color: ${props => props.theme.color.separator};
  height: 30px;
  margin-left: 5px;
`;

const KeynoteName = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
  width: 200px;
`;

const LeftArrowPress = Styled.TouchableOpacity`
  align-self: center;
`;

const RightArrowPress = Styled.TouchableOpacity`
  align-self: center;
`;

function Drawer({navigation}) {
  const [data, setData] = React.useState([{title: 'Opening keynote by NNIT Cópenhagen', startTime: '09:00', endTime: '23:59'}, {title: 'Opening keynote by Huzaifa', startTime: '10:25', endTime: '10:59'},
  {title: 'Opening keynote about Tame from jasenko', startTime: '11:30', endTime: '12:15'}]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const {title} = data[activeIndex];

  function goToNextArticle() {
    let length = data.length - 1;
    if (activeIndex === length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  function gotToPrevArticle() {
    let length = data.length - 1;
    if (activeIndex === 0) {
      setActiveIndex(length);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  function goBack() {
    navigation.pop();
  }

  return (
    <Container>
      <Header onPress={goBack} title={'Programme'} />
      <FlatList
        data={[data[activeIndex]]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <Content {...item} />}
      />
      <NavigationView>
        <Seprator />
        <ControlView>
          <Controls>
            <LeftArrowPress onPress={gotToPrevArticle}>
              <VectorIcon name='backarrow' size={20} />
            </LeftArrowPress>
            <HorizontalSeprator />
          </Controls>
          <KeynoteName numberOfLines={1}>
            {title}
          </KeynoteName>
          <RightArrowPress onPress={goToNextArticle}>
            <VectorIcon name='backarrow' size={20} />
          </RightArrowPress>
        </ControlView>
      </NavigationView>
    </Container>
  );
}

export default Drawer;
