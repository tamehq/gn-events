import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {cloneDeep} from 'lodash'
import {Header, Left, Body, Right} from 'native-base';
import Styled from 'styled-components/native';
import SideNavigator from "./Drawer/Drawer";
import VectorIcon from "./VectorIcon";
import {getCurrentUser} from "../api";

const BackArrowContainer = Styled.TouchableOpacity`
  margin-left: 25px;
`;

const HeaderTitle = Styled.Text`
  font-weight: bold;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-size: 23px;
  text-align: center;
  align-self: center;
`;

const RightIconContainer = Styled.TouchableOpacity`
  margin-right: 15px;
`;

const RightIcon = Styled.Image`
  height: 20px;
  width: 20px;
`;

interface HeaderInterface {
  onPress?: any;
  title?: string;
  backArrow?: boolean;
  right?: boolean;
  drawer?: boolean;
  rightIcon?: File;
  navigation?: any;
}

const HeaderComponent = (props: HeaderInterface) => {

  useEffect(() => {
    if (props.drawer) {
      getCurrentUser().then(user => setUser(cloneDeep(user)))
    }
  }, [])

  const {onPress, title, backArrow = true, right = false, rightIcon, drawer, navigation} = props;
  const {containerStyle, leftStyle, bodyStyle, rightStyle} = styles;
  const [showDrawer, setShowDrawer] = useState(false)
  const [user, setUser] = useState()
  return (
    <Header style={containerStyle}>
      {showDrawer &&
      <SideNavigator
          user={user}
          openDrawer={showDrawer}
          navigation={navigation}
          onChange={() => setShowDrawer(!showDrawer)}
      />}
      <Left style={leftStyle}>
        {backArrow && !!onPress &&(
          <BackArrowContainer onPress={onPress}>
            <VectorIcon name='arrow-back' color='black' size={18} />
          </BackArrowContainer>
        )}
        {drawer &&
        <BackArrowContainer onPress={() => setShowDrawer(!showDrawer)}>
          <VectorIcon name='hamburger' color='black' size={20} />
        </BackArrowContainer>}
      </Left>
      <Body style={bodyStyle}>
        <HeaderTitle>{title}</HeaderTitle>
      </Body>
      <Right style={rightStyle}>
        {right && (
          <RightIconContainer onPress={onPress}>
            <RightIcon source={rightIcon} resizeMode={'contain'} />
          </RightIconContainer>
        )}
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
    backgroundColor: '#ffffff',
  },
  leftStyle: {
    flex: 1,
  },
  bodyStyle: {
    flex: 4,
  },
  rightStyle: {
    flex: 1,
  },
});

export default HeaderComponent;
