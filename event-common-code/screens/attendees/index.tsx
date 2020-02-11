import React from 'react';
import Attendees from './Attendees';
import {cloneDeep} from 'lodash';
import {fetchAttendeesList} from './module/api/';
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import {ActivityIndicator} from "react-native";
import { Container, LoadingContainer } from './StyledComponents'
import {ThemeContext} from "../../../App";

const index = ({navigation}) => {
  const theme = React.useContext(ThemeContext)
  const fromChat = navigation.getParam('fromChat');
  const eventId = navigation.getParam('activeEvent');
  const [attendees, setAttendees] = React.useState<any>([]);
  const [allAttendees, setAllAttendees] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    getAttendees();
  }, []);

  const getAttendees = async () => {
    try {
      const attendees = await fetchAttendeesList(eventId);
      if (attendees) {
        let activeAttendees = attendees.filter(attendee => {
          if (attendee.status === 'confirmed') {
            return attendee;
          }
        });
        activeAttendees = activeAttendees
            .sort((a, b) => a.name.first > b.name.first ? 1 : -1)
        setAllAttendees(activeAttendees);
        makeSectionData(activeAttendees);
      }
    } catch (error) {
      setLoading(false);
      console.warn('attendees fetching error');
    }
  };

  let timeout: any = null
  const startSearching = (text) => {
    setSearch(cloneDeep(text));
    if (timeout) {
      clearInterval(timeout)
    }
    timeout = setTimeout(() => {
      searchList(text)
    }, 500)
  }

  const searchList = text => {
    if (!text) {
      makeSectionData(allAttendees)
      return
    }
    const str = text.toUpperCase()
    const filtered = allAttendees.filter((value: any) => {
      const {name, employment} = value || {}
      const {first = '', last = ''} = name || {}
      const {position = '', company = ''} = employment || {}
      if (first && first.toUpperCase().includes(str)) return true;
      if (last && last.toUpperCase().includes(str)) return true;
      if (position && position.toUpperCase().includes(str)) return true;
      if (company && company.toUpperCase().includes(str)) return true;
    });
    makeSectionData(filtered);
  };

  const makeSectionData = (array) => {
    let obj = {}
    for(const item of array){
      const char = item.name ? item.name.first ? item.name.first.charAt(0).toLocaleUpperCase() : '' : ''
      if (!obj[char]) {
        obj[char] = []
      }
      obj[char].push(item)
    }
    const sections: any = []
    for(const key in obj){
      if (key) {
        sections.push({ title: key, data: obj[key]})
      }
    }
    setAttendees(sections);
    setTimeout(() => setLoading(false), 1000)
    ;
  }

  return (
      <Container>
        <Header
          drawer={!fromChat}
          title={'Attendees'}
          backArrow={fromChat}
          navigation={navigation}
          onPress={fromChat ? () => navigation.pop() : null} />
        {loading ?
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.color.primary} />
        </LoadingContainer>
        : <Container>
           <SearchBar value={search} onChangeText={startSearching} />
           <Attendees
               fromChat={fromChat}
               navigation={navigation}
               sectionData={attendees} />
        </Container>
        }
     </Container>
  );
}

export default index;
