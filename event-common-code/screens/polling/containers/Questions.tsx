import React from 'react';
import Styled from 'styled-components/native';
import Button from '../components/Button';
import Question from '../components/Question';

const Container = Styled.View`
  background-color: ${props => props.theme.color.screenBg};
  flex: 1;
`;

const LiveView = Styled.View`
  padding: 15px 30px 0px 30px;
`;

const CountView = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Count = Styled.View`
  margin-right: 3px;
`;

const CountText = Styled.Text`
  color: rgb(155, 155, 155);
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
`;

const FilterWrapper = Styled.View`
  flex-direction: row;
`;

const FilterView = Styled.TouchableOpacity`
  border-bottom-width: 3px;
  border-bottom-color: ${props =>
    props.active ? 'rgb(13, 42, 67)' : 'transparent'};
  padding-bottom: 15px;
  height: 100%;
`;

const FilterText = Styled.Text`
  color: rgb(13, 42, 67);
  font-size: 18px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
`;

function QuestionsView(props) {
  const AskQuestion = () => props.navigation.push('AskQuestion');

  return (
    <Container>
      <LiveView>
        <Button
          onSubmit={AskQuestion}
          label={'Ask a question'}
          submitted={false}
        />
        <CountView>
          <FilterWrapper>
            <FilterView active={true}>
              <FilterText>Popular</FilterText>
            </FilterView>
            <FilterView style={{marginLeft: 10}}>
              <FilterText>Recent</FilterText>
            </FilterView>
          </FilterWrapper>
          <Count>
            <CountText>
              <CountText>10 </CountText>
              <CountText>Questions</CountText>
            </CountText>
          </Count>
        </CountView>
      </LiveView>
      <Question
        description={`What do you imagine the role of MarTech taking in the next 5 years in third world countries?`}
      />
      <Question
        description={`What’s your take on the efforts to increase diversity in tech companies, especially in the valley where the problem is becoming increasingly larger?`}
      />
    </Container>
  );
}

export default QuestionsView;
