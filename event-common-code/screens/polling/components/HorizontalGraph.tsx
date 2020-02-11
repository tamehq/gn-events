import React from 'react';
import Styled from 'styled-components/native';
import StarFilled from '../../../assets/images/polling/star_filled.png';

const Container = Styled.View`
  height: 245px;
  width: 100%;
`;

const SubContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

const Wrapper = Styled.View`
  align-self: flex-end;
  width: 15%;
`;

const Bar = Styled.View`
  height: ${props => (props.height === '0%' ? '5%' : props.height)};
  background-color: ${props => (props.height === '0%' ? '#d8d8d8' : '#0d2a43')};
`;

const PercentText = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
  text-align: center;  
`;

const ScoreView = Styled.View`
  flex-direction: row;
`;

const ScoreText = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
`;

const Image = Styled.Image`
  width: 15px;
  height: 15px;
  margin-left: 3px;
  align-self: center;
`;

const percentages = ['0%', '20%', '30%', '100%', '50%'];

function HorizontalGraphComponent() {
  return (
    <Container>
      <ScoreView>
        <ScoreText>Score: 3.8</ScoreText>
        <Image source={StarFilled} resizeMode={'contain'} />
      </ScoreView>
      <SubContainer>
        {percentages.map((percent, index) => (
          <Wrapper key={index.toString()}>
            <PercentText style={{marginBottom: 10}}>{percent}</PercentText>
            <Bar key={index.toString()} height={percent} />
            <PercentText style={{marginTop: 5}}>{index}</PercentText>
          </Wrapper>
        ))}
      </SubContainer>
    </Container>
  );
}

export default HorizontalGraphComponent;
