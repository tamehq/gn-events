import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Left, Body, Right} from 'native-base';
import Styled from 'styled-components/native';
import VectorIcon from "../../../components/VectorIcon";

const CloseIconContainer = Styled.TouchableOpacity`
  margin-left: 25px;
`;

const HeaderTitle = Styled.Text`
  color: ${props => props.theme.color.charcoal};
  font-size: 20px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  text-align: center;  
`;

const RightTextContainer = Styled.TouchableOpacity`
  margin-right: 25px;
`;

const RightText = Styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 10px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  text-decoration: underline;
  text-align: right;
`;

interface HeaderInterface {
  leftPress?: any;
  rightPress?: any;
  title?: string;
}

const HeaderComponent = (props: HeaderInterface) => {
  const {leftPress, rightPress, title} = props;
  const {containerStyle, leftStyle, bodyStyle, rightStyle} = styles;
  return (
    <Header style={containerStyle}>
      <Left style={leftStyle}>
        <CloseIconContainer onPress={leftPress}>
          <VectorIcon name='close' size={20}/>
        </CloseIconContainer>
      </Left>
      <Body style={bodyStyle}>
        <HeaderTitle>{title}</HeaderTitle>
      </Body>
      <Right style={rightStyle}>
        <RightTextContainer onPress={rightPress}>
          <RightText>Reset</RightText>
        </RightTextContainer>
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
