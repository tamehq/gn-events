import React, {useEffect} from 'react';
import ListItem from './components/ListItem';
import {
    SubContainer, Headline, Subheader, ChatList, MessageContainer, Section, Title, LoadingContainer
} from './StyledComponents'
import {ActivityIndicator} from "react-native";
import {getDisplayDay} from "../../helpers/utils";

interface ChatInterface {
  navigation: any;
  loading?: boolean;
  sectionData: any[];
}

const Chat = (props: ChatInterface) => {
  const {navigation, loading} = props;
    const [chat, setChat] = React.useState<any[]>([]);

  useEffect(() => {
      setChat(props.sectionData);
  }, [props.sectionData]);

  const renderEmptyList = () =>  {
    return (
        <MessageContainer>
          <Headline>No chat added</Headline>
          <Subheader>
            When chat are added to this event, you will see them here
          </Subheader>
        </MessageContainer>
    );
  }

  const renderFooter = () =>  {
    return loading ? (
        <LoadingContainer>
            <ActivityIndicator size="large" color="#780000" />
        </LoadingContainer>
    ) : null;
  }

  return (
      <SubContainer>
        <ChatList
          windowSize={5}
          sections={chat}
          removeClippedSubviews
          keyboardShouldPersistTaps='handled'
          keyExtractor={(_item, Index) => _item.id || Index.toString()}
          renderSectionHeader={({section}) => (
              <Section><Title>{getDisplayDay(section.title)}</Title></Section>
          )}
          renderItem={({item, index}) => (
            <ListItem
              index={index}
              attendee={item}
              data={chat}
              navigation={navigation}
            />
          )}
          ListEmptyComponent={renderEmptyList}
          renderSectionFooter={renderFooter}
        />
      </SubContainer>
  );
};

export default Chat;
