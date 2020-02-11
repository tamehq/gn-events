import React from 'react';
import {TextInput} from 'react-native';
import Styled from 'styled-components/native';
import Header from '../../../components/Header';
import Button from './Button';
import SampleImage from '../../../assets/images/avatar2.png';
import check from '../../../assets/images/polling/check.png';

const Container = Styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const Wrapper = Styled.ScrollView`
  flex: 1;
  padding: 0px 30px 30px 30px;
`;

const QuestionBox = Styled.TextInput``;

const UsersBox = Styled.View`
`;

const AskText = Styled.Text`
  color: rgb(155, 155, 155);
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
  margin-bottom: 7px;
`;

const UserView = Styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0px 10px 0px;
  justify-content: space-between;
`;

const UsersWrapper = Styled.View`
  flex-direction: row;
  align-items: center;
`;

const Seprator = Styled.View`
  background-color: ${props => props.theme.color.borderLine};
  width: 100%;
  height: 1px;
`;

const Avatar = Styled.Image`
  height: 40px;
  width: 40px;
`;

const Name = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
  margin-left: 10px;
`;

const Image = Styled.Image`
  height: 30px;
  width: 30px;
`;

interface AskInterface {
  navigation: {
    pop: () => void;
    push: (string) => void;
  };
}

const Users = ['Oliver', 'Anonymous'];

function AskQuestion(props: AskInterface) {
  const [question, setQuestion] = React.useState('');
  const goBack = () => props.navigation.pop();

  return (
    <Container>
      <Header title={'Question'} onPress={goBack} />
      <Wrapper
        contentContainerStyle={{justifyContent: 'space-between', flexGrow: 1}}>
        <TextInput
          value={question}
          onChangeText={text => setQuestion(text)}
          style={{flex: 1, minHeight: 300, marginTop: 5}}
          multiline={true}
          textAlignVertical={'top'}
        />
        <UsersBox>
          <AskText>Send question as...</AskText>
          {Users.map((user, index) => (
            <>
              <Seprator />
              <UserView key={index}>
                <UsersWrapper>
                  <Avatar source={SampleImage} borderRadius={7.5} />
                  <Name>{user}</Name>
                </UsersWrapper>
                <Image source={check} resizeMode={'contain'} />
              </UserView>
            </>
          ))}
          <Seprator style={{marginBottom: 30}} />
          <Button onSubmit={goBack} label={'Ask question'} />
        </UsersBox>
      </Wrapper>
    </Container>
  );
}

export default AskQuestion;
