import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  padding: 10px 30px;
  background-color: #f7f7f7;
`;

const ProfileContainer = Styled.View`
    padding: 15px 0;
    align-items: center;
    border-bottom-width: 0.5px;
    border-bottom-color: ${props => props.theme.color.borderLine}
`;
const SocialButtons = Styled.View`
    margin-top: 10px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;
const SocialIcon = Styled.TouchableOpacity`
    padding: 5px;
`;
const Dropdown = Styled.TouchableOpacity`
    padding: 5px;
    align-items: center;
    justify-content: center;
`;

const SubContainer = Styled.View`
     align-items: center;
`;

const RaisedImage = Styled.View`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 3px;
  elevation: 4;
`;

const Image = Styled.Image`
  width: ${props => props.theme.WP('28')};
  height: ${props => props.theme.WP('28')};
  border-radius: 10px
`;

const TextContainer = Styled.View`
  flex: 1;
  padding-top: 15;
`;

const Name = Styled.Text`
  font-size: 28px;
  margin-top: 15px;
  color: ${props => props.theme.color.blackText};
  font-family: ${props => props.theme.fontFamilies.boldFont};
`;

const Designation = Styled.Text`
    font-size: 17px;
    margin-top: 5px;
    text-align: center;
    color: ${props => props.theme.color.lightGray};
    font-family: ${props => props.theme.fontFamilies.regularFont};
`;
const Description = Styled.Text`
    font-size: 17px;
    margin-top: 5px;
    color: ${props => props.theme.color.grayText};
    font-family: ${props => props.theme.fontFamilies.latoRegular};
`;
const BioText = Styled.Text`
    font-size: 17px;
    color: ${props => props.theme.color.blackText};
    font-family: ${props => props.theme.fontFamilies.latoLight};
`;

const ArrowImage = Styled.Image`
  width: 15px;
  height: 15px;
  tint-color: ${props => props.theme.color.blackText}
`;

const NoAvatar = Styled.View`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: ${props => props.theme.WP('28')};
  height: ${props => props.theme.WP('28')};
`;

const FirstLetter = Styled.Text`
  font-size: 30px;
  color: ${props => props.theme.color.blackText};
  font-family: ${props => props.theme.fontFamilies.boldFont};
`;

export {
    Container, SubContainer, Description, SocialIcon, Image, ArrowImage, TextContainer, SocialButtons,
    Designation, FirstLetter, NoAvatar, RaisedImage, ProfileContainer, Name, BioText, Dropdown
}
