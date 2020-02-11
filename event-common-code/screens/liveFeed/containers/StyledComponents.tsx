import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;
const SubContainer = Styled.View`
  flex: 1;
  padding: 10px 0;
`;

const BottomView = Styled.View`
  padding: 20px 30px 10px 30px;
  justify-content: center;
`;

const CameraCover = Styled.TouchableOpacity`
  margin-bottom: 20px;
  padding: 15px 10px;
  flex-direction: row;
  border-left-width: 0;
  border-right-width: 0;
  align-items: center;
  border: 1px solid ${props => props.theme.color.borderLine};
`;

const CameraBg = Styled.View`
   padding: 6px;
   background: rgb(239, 239, 239);
   border-radius: 8px;
`;

const KeynoteName = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 18px;
  margin-left: 15px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
`;

const CommentInput = Styled.TextInput`
  color: ${props => props.theme.color.black};
  font-size: 22px;
  margin: 0 30px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
`;
const PostImage = Styled.Image`
  height: 270px;
  margin-top: 20px;
  resize-mode: cover;
`;
const CrossCircle = Styled.TouchableOpacity`
  padding: 3px;
  top: 30px;
  right: 10px;
  z-index: 100;
  border-radius: 15px;
  position: absolute;
  background-color: rgb(216, 216, 216)
`;
const ErrorText = Styled.Text`
  color: red;
  font-size: 12
  margin-bottom: 5px;
  font-family: ${props => props.theme.fontFamilies.regularFont}
`;

export { BottomView, CommentInput, Container, CameraCover, CrossCircle, KeynoteName,
   PostImage, SubContainer, CameraBg, ErrorText }
