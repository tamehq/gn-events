import React from 'react';
import Styled from 'styled-components/native';
import Button from '../components/Button';
import QuestionView from '../components/QuestionView';
import VerticalGraph from '../components/VerticalGraph';
import UserIcon from '../../../assets/images/polling/users.png';

const Container = Styled.View`
  background-color: #ffffff;
  flex: 1;
  justify-content: space-between;
`;

const LiveView = Styled.View`
  padding: 15px 30px 15px 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.color.screenBg};
`;

const LiveText = Styled.Text`
  color: rgb(155, 155, 155);
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
`;

const CountView = Styled.View`
  flex-direction: row;
`;

const Count = Styled.Text`
  color: rgb(13, 42, 67);
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
  text-align: right;
`;

const PollView = Styled.View`
  padding: 20px 30px 0px 30px;
`;

const Heading = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.boldFont};
  font-weight: bold;
  line-height: 28px;
`;

const Seprator = Styled.View`
  background-color: #979797;
  height: 1px;
  width: 100%;
  margin: 20px 0px 10px 0px;
  opacity: 0.35;
`;

const ButtonView = Styled.View`
  background-color: ${props => props.theme.color.screenBg};
  padding: 15px 30px 30px 30px;
`;

const Wrapper = Styled.View`
`;

const Image = Styled.Image`
  width: 20px;
  height: 20px;
`;

function PollScreen() {
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmitted = () => setSubmitted(!submitted);

  return (
    <Container>
      <Wrapper>
        <LiveView>
          <LiveText>Live Poll</LiveText>
          <CountView>
            <Image resizeMode={'contain'} source={UserIcon} />
            <Count>12</Count>
          </CountView>
        </LiveView>
        <PollView>
          <Heading>
            {`Which will drive affordable consumer technology in \n2020?`}
          </Heading>
          <Seprator />
          {/* <HorizontalGraph /> */}
          {/* <RatingView /> */}
          {!submitted && <QuestionView />}
          {submitted && <VerticalGraph />}
        </PollView>
      </Wrapper>
      <ButtonView>
        <Button submitted={submitted} onSubmit={onSubmitted} />
      </ButtonView>
    </Container>
  );
}

export default PollScreen;
