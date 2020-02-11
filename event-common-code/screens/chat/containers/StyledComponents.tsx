import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  padding: 20px 0;
  background-color: #f7f7f7;
  justify-content: space-between;
`;

const ChatContainer = Styled.View`
    flex: 1;
    padding: 15px 0;
    align-items: center;
`;
const MessageContainer = Styled.View`
    width: 100%;
    margin: 15px 0;
    align-items: center;
    flex-direction: row;
`;
const ChatList = Styled.FlatList`
    flex: 1;
    padding: 0 25px;
`;

const SubContainer = Styled.View`
     align-items: center;
     flex-direction: row;
`;

const RaisedImage = Styled.View`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 3px;
  elevation: 4;
`;

const Image = Styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 10px
`;

const MessageCover = Styled.View`
  flex: 1; 
  padding: 25px;
  border-radius: 10px;
`;

const Message = Styled.Text`
  font-size: 16px;
  color: ${props => props.theme.color.chatColor};
  font-family: ${props => props.theme.fontFamilies.latoRegular};
`;

const MessageTime = Styled.Text`
    font-size: 14px;
    margin-top: 2px;
    color: ${props => props.theme.color.chatTime};
    font-family: ${props => props.theme.fontFamilies.latoBold};
`;
const Description = Styled.Text`
    font-size: 17px;
    margin-top: 5px;
    color: ${props => props.theme.color.grayText};
    font-family: ${props => props.theme.fontFamilies.latoRegular};
`;

const NoAvatar = Styled.View`
  width: 45px;
  height: 45px;
  border-radius: 10px
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const FirstLetter = Styled.Text`
  font-size: 30px;
  color: ${props => props.theme.color.blackText};
  font-family: ${props => props.theme.fontFamilies.boldFont};
`;
export {
    Container, SubContainer, Description, ChatList, Image, MessageCover, MessageContainer,
    MessageTime, FirstLetter, NoAvatar, RaisedImage, ChatContainer, Message
}
