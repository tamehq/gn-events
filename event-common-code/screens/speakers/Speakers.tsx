import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';
import Header from '../../components/Header';
import SearchBar from './components/SearchBar';
import ListItem from './components/ListItem';
import {ThemeContext} from "../../../App";

const Container = Styled.View<{color: string}>`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
`;

const SubContainer = Styled.View`
  flex: 1;
`;

const SpeakersList = Styled(FlatList)`
  margin-top: 15px;
`;

const LoadingContainer = Styled.View`
  flex: 1;
  justify-content: center;
`;

const Headline = Styled.Text`
  font-size: 25px;
  font-family: ${props => props.theme.fontFamilies.extraBoldFont};
  font-weight: 800;
  text-align: center;
`;

const Subheader = Styled.Text`
  fontFamily: ${props => props.theme.fontFamilies.latoLight};
  fontSize: 20;
  color: ${props => props.theme.color.blackText};
  fontWeight: 300;
  textAlign: center;
`;

interface SpeakersInterface {
  timeZone: number;
  navigation: any;
  speakers: any[];
  loading: boolean;
}

export interface ListProps {
  employment: {
    position?: string;
    company?: string;
  };
  images: {
    profile?: string;
  };
  metadata: {};
  person: {
    employment: {
      position: string;
      company: string;
    };
    images: {
      profile?: string;
    };
    name: {
      first: string;
      last: string;
    };
    _id: string;
    _key: string;
  };
  navigation: {
    push: any;
  };
  index: number;
  data: string[];
  bio: string;
  timeZone: number;
}

const Speakers = (props: SpeakersInterface) => {
  const theme = React.useContext(ThemeContext)
  const {navigation, timeZone} = props;
  const [speakers, setSpeakers] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    setSpeakers(props.speakers);
  }, [props.speakers]);

  const searchList = text => {
    setSearch(text);
    const filtered = props.speakers.filter(value => {
      const name = value.person.name.first.toUpperCase();
      if (name.indexOf(text.toUpperCase()) > -1) return true;
      const lastName = value.person.name.last.toUpperCase();
      if (lastName.indexOf(text.toUpperCase()) > -1) return true;
      if (value.person.employment) {
        if (value.person.employment.position !== undefined) {
          const position = value.person.employment.position.toUpperCase();
          if (position.indexOf(text.toUpperCase()) > -1) return true;
        }
        if (value.person.employment.company !== undefined) {
          const company = value.person.employment.company.toUpperCase();
          if (company.indexOf(text.toUpperCase()) > -1) return true;
        }
      }
    });
    setSpeakers(filtered);
  };

  if (props.loading) {
    return (
      <Container>
        <Header title={'Speakers'} backArrow={false} />
        <LoadingContainer>
          <ActivityIndicator size="large" color={theme.color.primary} />
        </LoadingContainer>
      </Container>
    );
  }

  if (props.speakers.length === 0) {
    return (
      <Container>
        <Header title={'Speakers'} backArrow={false} />
        <Container style={{justifyContent: 'center', padding: 20}}>
          <Headline>No speakers added</Headline>
          <Subheader>
            When speakers are added to this event, you will see them here
          </Subheader>
        </Container>
      </Container>
    );
  }

  return (
    <Container>
      <Header
        drawer
        navigation={navigation}
        title={'Speakers'}
        backArrow={false}
      />
      <SearchBar value={search} onChangeText={searchList} />
      <SubContainer>
        <SpeakersList
          data={speakers}
          keyExtractor={(_item: ListProps, Index) => Index.toString()}
          renderItem={({item, index}) => (
            <ListItem
              {...item}
              index={index}
              navigation={navigation}
              data={speakers}
              timeZone={timeZone}
            />
          )}
        />
      </SubContainer>
    </Container>
  );
};

export default Speakers;
