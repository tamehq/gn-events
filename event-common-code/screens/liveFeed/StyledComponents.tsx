import Styled from 'styled-components/native';
import {FlatList} from "react-native";

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

const PostsList = Styled(FlatList)`
  flex: 1;
  margin-top: 15px;
`;

const LoadingContainer = Styled.View`
  flex: 1;
  justify-content: center;
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

export { Container, SubContainer, ButtonContainer, Headline, LoadingContainer, PostsList, Subheader }
