import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity`
  margin: 10px 30px 5px 30px;
  padding: 5px 0 15px 0;
  min-height: 80px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${props => props.theme.color.borderLine}
`;

const InnerContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SubContainer = Styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
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
  padding: 3px 5px 0 15px;
`;

const Name = Styled.Text`
  font-size: 17px;
  margin-bottom: 3px;
  color: ${props => props.theme.color.blackText};
  font-family: ${props => props.theme.fontFamilies.boldFont};
`;

const Designation = Styled.Text`
    font-size: 13px;
    margin-bottom: 3px;
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

export {
    Container, SubContainer, Image, ArrowImage, DescriptionContainer,
    Designation, FirstLetter, NoAvatar, RaisedImage, InnerContainer, Name
}
