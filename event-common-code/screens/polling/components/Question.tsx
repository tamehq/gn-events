import React from 'react';
import Styled from 'styled-components/native';
import SampleImage from '../../../assets/images/avatar2.png';
import VectorIcon from "../../../components/VectorIcon";

const Container = Styled.View`
  background-color: #ffffff;
  padding: 15px 30px 15px 30px;
  margin-bottom: 10px;
`;

const UserView = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = Styled.View`
  flex-direction: row;
`;

const Avatar = Styled.Image`
  height: 40px;
  width: 40px;
`;

const DescriptionView = Styled.View`
  margin-left: 10px;
`;

const Name = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
`;

const Time = Styled.Text`
  color: ${props => props.theme.color.grayText};
  font-size: 14px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
`;

const HeartPress = Styled.TouchableOpacity``;

const HeartView = Styled.View`
  flex-direction: row;
`;

const Image = Styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

const Description = Styled.Text`
  margin-top: 15px;
`;

function QuestionView(props) {
  const [love, setLove] = React.useState(false);

  const toggleLove = () => setLove(!love);

  return (
    <Container>
      <UserView>
        <Wrapper>
          <Avatar source={SampleImage} borderRadius={7.5} />
          <DescriptionView>
            <Name>John GrenWell Adams</Name>
            <Time>2 mins</Time>
          </DescriptionView>
        </Wrapper>
        <HeartView>
          <Time>10</Time>
          <HeartPress onPress={toggleLove}>
            <VectorIcon name={love ? 'like' : 'heart'} size={20}/>
          </HeartPress>
        </HeartView>
      </UserView>
      <Description>{props.description}</Description>
    </Container>
  );
}

export default QuestionView;
