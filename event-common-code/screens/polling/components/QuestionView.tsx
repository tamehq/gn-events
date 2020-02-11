import React from 'react';
import Styled from 'styled-components/native';
import Checkboxes from './Checkboxes';

const AnswerView = Styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

const PollAnswer = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  margin-left: 13px;
`;

const Answers = ['Self driving cars', 'Augmented Reality', 'Virtual Reality'];

function QuestionComponent() {
  return (
    <>
      {Answers.map((answer, index) => (
        <AnswerView key={index}>
          <Checkboxes />
          <PollAnswer>{answer}</PollAnswer>
        </AnswerView>
      ))}
    </>
  );
}

export default QuestionComponent;
