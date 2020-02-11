import Styled from 'styled-components/native';
import {Platform} from "react-native";

const Container = Styled.TouchableOpacity`
  margin: 0 30px;
  padding: 15px 0 5px 0;
  min-height: 100px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.color.borderLine}
`;

const InnerContainer = Styled.View`
   padding-top: 2px;
   padding-right: 10px;
   flex-direction: row;
   align-items: center;
`;

const SubContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;
const SubMsgContainer = Styled.View`
     padding: 0 25px;
`;

const RaisedImage = Styled.View`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;
  elevation: 4;
`;

const Image = Styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 10px
`;

const DescriptionContainer = Styled.View`
  flex: 1;
  padding: 0px 5px 0 15px;
`;

const Name = Styled.Text`
  font-size: 17px;
  color: ${props => props.theme.color.blackText};
  font-family: ${props => props.theme.fontFamilies.boldFont};
`;

const Designation = Styled.Text`
    flex: 1;
    font-size: 12px;
    color: ${props => props.theme.color.blackText};
    font-family: ${props => props.theme.fontFamilies.regularFont};
`;
const MessageTime = Styled.Text`
    font-size: 12px;
    color: ${props => props.theme.color.lightGray};
    font-family: ${props => props.theme.fontFamilies.regularFont};
`;

const ArrowImage = Styled.Image`
  width: 15px;
  height: 15px;
  tint-color: ${props => props.theme.color.blackText}
`;

const NoAvatar = Styled.View`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

const FirstLetter = Styled.Text`
  font-size: 30px;
  color: ${props => props.theme.color.blackText};
  font-family: ${props => props.theme.fontFamilies.boldFont};
`;
const Dot = Styled.View`
    width: 4px;
    height: 4px;
    margin-right: 2px;
    border-radius: 2px;
    background-color: ${props => props.theme.color.lightGray}
`;
const Input = Styled.TextInput`
  min-height: 50px;
  font-size: 15px;
  padding: 15px 35px 10px 15px;
  background: white;
  border-radius: 8px;
  align-items: center;
  color: ${props => props.theme.color.blackText};
  font-family: ${props => props.theme.fontFamilies.latoRegular};
`;
const Circle = Styled.TouchableOpacity`
   width: 50px;
   height: 50px;
   border-radius: 25px;
   align-items: center;
   background: white;
   justify-content: center;
`
const SendButton = Styled.TouchableOpacity`
  right: 5px;
  padding: 3px;
  border-radius: 6;
  position: absolute;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.color.primary};
  justify-content: center;
  bottom: ${Platform.OS === 'ios' ? '10px' : '14px'};
`;
export {
    Container, MessageTime, SubContainer, Image, ArrowImage, DescriptionContainer, SubMsgContainer,
    Designation, FirstLetter, NoAvatar, RaisedImage, InnerContainer, Name, Dot, Circle, Input, SendButton
}
