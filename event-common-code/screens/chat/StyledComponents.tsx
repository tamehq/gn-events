import Styled from 'styled-components/native';
import {SectionList} from "react-native";

const Container = Styled.View`
  flex: 1;
  background-color: #f7f7f7;
`;

const SubContainer = Styled.View`
  flex: 1;
`;
const ButtonContainer = Styled.View`
  padding: 20px 25px 0 25px;
`;

const ChatList = Styled(SectionList)`
  padding: 10px 0px;
`;

const LoadingContainer = Styled.View`
  flex: 1;
  justify-content: center;
`;

const MessageContainer = Styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  height: ${props => props.theme.HP('50')};
`;

const Headline = Styled.Text`
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
`;

const Subheader = Styled.Text`
  fontFamily: ${props => props.theme.fontFamilies.latoLight};
  fontSize: 20;
  color: ${props => props.theme.color.blackText};
  fontWeight: 300;
  textAlign: center;
`;
const Section = Styled.View`
  min-height: 40px;
  padding: 20px 30px 5px 30px;
`;
const Title = Styled.Text`
  font-size: 19px;
  color: ${props => props.theme.color.charcoal};
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
`;

export { Container, Section, Title, SubContainer, MessageContainer, ButtonContainer, Headline, LoadingContainer, Subheader, ChatList }
