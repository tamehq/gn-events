import Styled from 'styled-components/native';
import {isIphoneX} from "../../helpers/iPhonex";

const BgContainer = Styled.TouchableOpacity`
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.35)
`;
const Wrapper = Styled.TouchableOpacity`
    flex: 1;
    padding: 30px 0px;
    width: ${props => props.theme.WP('83')}px;
    height: ${props => props.theme.HP('98')}px;
    padding-left: ${props => props.theme.WP('10')}px;
    background-color: ${props => props.theme.color.onBoardingBg}
`;
const Scroll = Styled.ScrollView`
    width: ${props => props.theme.WP('83')}px;
    height: ${props => props.theme.HP('100')}px;
    background-color: ${props => props.theme.color.onBoardingBg}
`;
const Row = Styled.TouchableOpacity`
    align-items: center;
    flex-direction: row
`;
const ProfilePic = Styled.View`
    width: 45px;
    height: 45px;
    border-radius: 9px;
    resize-mode: cover
`;
const ContentStyle = Styled.View`
  margin-top: 20px
`;
const IconCover = Styled.View`
    width: 45px;
    height: 42px;
    align-items: center;
    justify-content: center
`;
const Username = Styled.Text`
    font-size: 16px;
    color: white;
    margin-left: 15px;
    font-family: ${props => props.theme.fontFamilies.boldFont}
`;
const ContentText = Styled.Text`
    font-size: 17px;
    color: white;
    margin-left: 15px;
    letter-spacing: 0.06px;
    font-family: ${props => props.theme.fontFamilies.boldFont}
`;
const Bar = Styled.View`
    height: 0.7px;
    width: 85%;
    margin: 15px 0 15px 10px;
    background-color: rgba(255, 255, 255, 0.20)
`;
const LogoutCover = Styled.TouchableOpacity`
    padding: 10px;
    position: absolute;
    left: ${props => props.theme.WP('5')}px;
    bottom: ${isIphoneX() ? 15 : 10}px
`;

export { Bar, BgContainer, ContentStyle, ContentText, IconCover, LogoutCover, ProfilePic, Row, Wrapper, Username, Scroll }
