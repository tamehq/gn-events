import React from 'react';
import Styled from 'styled-components/native';

const answers = [
  {name: 'Self driving cars', percent: '60%'},
  {name: 'Augmented Reality', percent: '30%'},
  {name: 'Virtual Reality', percent: '10%'},
];

const Container = Styled.View`
  margin-top: 15px;
`;

const AnswerView = Styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const AnswerName = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
`;

const AnswerPercent = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
  text-align: right;
`;

const Bar = Styled.View`
  width: 100%;
  background-color: #eeeeee;
  height: 20px;
  border-radius: 20px;
  margin-top: 5px;
`;

const Progress = Styled.View`
  height: 20px;
  width: ${props => (props.width ? props.width : '0%')};
  background-color: #0d2a43;
  border-radius: 20px;
`;

function VerticalComponent() {
  return (
    <>
      {answers.map((answer, index) => (
        <Container key={index}>
          <AnswerView>
            <AnswerName>{answer.name}</AnswerName>
            <AnswerPercent>{answer.percent}</AnswerPercent>
          </AnswerView>
          <Bar>
            <Progress width={answer.percent} />
          </Bar>
        </Container>
      ))}
    </>
  );
}

export default VerticalComponent;
