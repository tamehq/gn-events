import Styled from 'styled-components/native';
import ParsedText from 'react-native-parsed-text';
import {Platform} from "react-native";

const Container = Styled.TouchableOpacity`
  overflow: scroll;
  margin-bottom: 10px;
  padding-top: 15px;
  background-color: white;
`;

const SubContainer = Styled.View<{align?: string}>`
  flex: 1;
  flex-direction: row;
  padding: 0 20px 15px 20px;
  align-items: ${props => (props.align ? props.align : 'center')};
`;
const ActionsContainer = Styled.View<{align?: string}>`
  flex: 1;
  padding: 15px 20px;
  flex-direction: row;
  align-items: ${props => (props.align ? props.align : 'center')};
`;
const InnerContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const RaisedImage = Styled.View`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px;
  elevation: 2;
`;

const Image = Styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  resize-mode: cover;
`;
const PostImage = Styled.Image`
  min-height: 270px;
  margin-bottom: 7px;
  resize-mode: cover;
`;
const TitleContainer = Styled.View`
  flex: 1;
  margin-top: 2px;
  margin-left: 15px;
`;

const TouchIcon = Styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Name = Styled.Text<{size?: string}>`
  color: black;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-size: ${props => (props.size ? props.size : '17px')};
`;
const Description = Styled(ParsedText)`
  color: black;
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
`;
const TimeStamp = Styled.Text`
  font-size: 14px;
  color: ${props => props.theme.color.grayText};
  font-family: ${props => props.theme.fontFamilies.latoRegular};
`;
const RightText = Styled.Text`
  flex: 1;
  font-size: 14px;
  text-align: right;
  color: ${props => props.theme.color.grayText};
  font-family: ${props => props.theme.fontFamilies.latoRegular};
`;
const LikeText = Styled.Text`
  font-size: 14px;
  margin: 0 10px 0 5px;
  color: ${props => props.theme.color.grayText};
  font-family: ${props => props.theme.fontFamilies.latoBold};
`;

const Hr = Styled.View`
  flex: 1;
  height: 1px;
  margin: 0 20px;
  border: 0.7px solid ${props => props.theme.color.borderLine};
`;

const NoAvatar = Styled.View`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.color.grayText};
`;

const FirstLetter = Styled.Text`
  color: ${props => props.theme.color.blackText};
  font-size: 22px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  text-align: center;
`;

const CommentInput = Styled.TextInput`
  flex: 1;
  margin-top: 7px;
  border-radius: 4px;
  background: white;
  color: black;
  font-size: 16px;
  min-height: 40px;
  padding: 9.5px 40px 8px 10px;
  font-family: ${props => props.theme.fontFamilies.latoLight};
  border: 0.7px solid rgb(223, 223, 223);
`;
const SendButton = Styled.TouchableOpacity`
  width: 26px;
  height: 26px;
  right: 27px;
  border-radius: 6;
  position: absolute;
  align-items: center;
  background-color: ${props => props.theme.color.primary};
  justify-content: center;
  bottom: ${Platform.OS === 'ios' ? '22px' : '14px'};
`;

export { SendButton, ActionsContainer, CommentInput, Container, Description, FirstLetter, Hr, Image, InnerContainer, LikeText, Name,
    NoAvatar, PostImage, RaisedImage, RightText, SubContainer, TimeStamp, TitleContainer, TouchIcon }
