import React from 'react';
import Chat from './Chat';
import { withTheme } from 'styled-components';
import {fetchChatList} from './module/api/';
import Header from "../../components/Header";
import {ActivityIndicator} from "react-native";
import { Container, LoadingContainer, ButtonContainer } from './StyledComponents'
import ButtonComponent from "../../components/Button";

const index = ({navigation, theme}) => {
  const [chatList, setChatList] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getChatList();
  }, []);

  const getChatList = async () => {
    try {
      let chatList = await fetchChatList();
      if (chatList) {
        chatList = chatList
            .sort((a, b) => a.date < b.date ? 1 : -1)
        // setAllChats(chatList);
        makeSectionData(chatList);
      }
    } catch (error) {
      setLoading(false);
      console.warn('chatList fetching error');
    }
  };

  const makeSectionData = (array) => {
    let obj = {}
    for(const item of array){
      if (!obj[item.date]) {
        obj[item.date] = []
      }
      obj[item.date].push(item)
    }
    const sections: any = []
    for(const key in obj){
      if (key) {
        sections.push({ title: key, data: obj[key]})
      }
    }
    setChatList(sections);
    setTimeout(() => setLoading(false), 1000)
    ;
  }

  const openAttendees = () => navigation.push('Attendees', {fromChat: true});

  return (
      <Container>
        <Header drawer navigation={navigation} title={'Chat'} backArrow={false} />
        {loading ?
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.color.primary} />
        </LoadingContainer>
        : <Container>
           <ButtonContainer>
             <ButtonComponent onPress={openAttendees} label='New message' />
           </ButtonContainer>
           <Chat
               navigation={navigation}
               sectionData={chatList} />
        </Container>
        }
     </Container>
  );
}

export default withTheme(index);
