import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {
    Container, ChatList
} from './StyledComponents'
import Header from "../../../components/Header";
import {capitalize} from "lodash";
import MessageInput from "../components/MessageInput";
import ChatItem from "../components/ChatItem";
import {Headline, Subheader} from "../../liveFeed/StyledComponents";
import {ThemeContext} from "../../../../App";

const ChatScreen = (props: any) => {
  let flatList;
  const theme = React.useContext(ThemeContext)

  const {navigation} = props;
  const [attendee] = React.useState(navigation.getParam('attendee'));

  const {name, messages = []} = attendee || {}
  const {first = '', last = ''} = name || {}

  return (
      <SafeAreaView style={{flex: 1, backgroundColor: theme.color.screenBg }} forceInset={{top: 'never'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
        <Header
            title={`${capitalize(first)} ${capitalize(last)}`}
            backArrow={true} onPress={() => navigation.pop()} />
            <Container>
                    <ChatList
                        data={messages}
                        ref={ref => flatList = ref}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => <ChatItem message={item}/>}
                        keyExtractor={(_item, index) => _item.id || index.toString()}
                        onLayout={() => flatList && flatList.scrollToEnd({animated: true})}
                        onContentSizeChange={() => flatList && flatList.scrollToEnd({animated: true})}
                        ListEmptyComponent={() => (
                          <Container style={{flex: 1, justifyContent: 'center', paddingHorizontal: 20, minHeight: theme.HP('70')}}>
                            <Headline>Say hi to {capitalize(first)} {capitalize(last)}!</Headline>
                            <Subheader>Start your conversation.</Subheader>
                          </Container>
                        )}
                    />
              <MessageInput onPinPress={() => {}} onSendPress={() => {}} />
            </Container>
        </KeyboardAvoidingView>
      </SafeAreaView>
  );
}

export default ChatScreen;
