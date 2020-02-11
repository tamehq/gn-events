import Styled from 'styled-components/native';
import {SectionList} from "react-native";

const Container = Styled.View<{color: string}>`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const SubContainer = Styled.View`
  flex: 1;
`;
const ButtonContainer = Styled.View`
  padding: 20px 20px 0 20px;
`;

const AttendeesList = Styled(SectionList)`
  padding-bottom: 10px;
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
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  text-align: center;
`;

const Subheader = Styled.Text`
  fontFamily: ${props => props.theme.fontFamilies.latoLight};
  fontSize: 20;
  color: ${props => props.theme.color.blackText};
  fontWeight: 300;
  textAlign: center;
`;
const Section = Styled.View`
  min-height: 30px;
  margin: 15px 30px 5px 30px;
  justify-content: center
`;
const Title = Styled.Text`
  font-size: 19px;
  color: ${props => props.theme.color.charcoal};
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
`;

export { Container, Section, Title, SubContainer, MessageContainer, ButtonContainer, Headline, LoadingContainer, Subheader, AttendeesList }
