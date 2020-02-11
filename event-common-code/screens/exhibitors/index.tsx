import React from 'react';
import Exhibitters from './Exhibitters';
import {cloneDeep} from 'lodash';
import {fetchAttendeesList} from './module/api';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import {ActivityIndicator} from 'react-native';
import {Container, LoadingContainer} from './StyledComponents';
import {connect} from 'react-redux';

const index = props => {
  const {navigation} = props;
  const eventId = navigation.getParam('activeEvent');
  const [attendees, setAttendees] = React.useState<any>([]);
  const [allAttendees, setAllAttendees] = React.useState<any>([]);
  const [loader, setLoader] = React.useState(true);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    getAttendees();
  }, [props]);

  const getAttendees = async () => {
    try {
      if (!props.loading) {
        if (props.exhibitors && props.exhibitors.published === true) {
          const exhibitors = await fetchAttendeesList(eventId);
          if (attendees) {
            if (props.exhibitors.settings) {
              const activeExhibiters = exhibitors.filter(exhibitor => {
                if (props.exhibitors.settings[exhibitor.id] !== undefined) {
                  if (
                    props.exhibitors.settings[exhibitor.id].published === true
                  )
                    return true;
                }
                return false;
              });
              setAllAttendees(activeExhibiters);
              makeSectionData(activeExhibiters);
            }
          }
        } else {
          setLoader(false);
        }
      }
    } catch (error) {
      setLoader(false);
      console.warn('exhibitor fetching error', error);
    }
  };

  let timeout: any = null;
  const startSearching = text => {
    setSearch(cloneDeep(text));
    if (timeout) {
      clearInterval(timeout);
    }
    timeout = setTimeout(() => {
      searchList(text);
    }, 500);
  };

  const searchList = text => {
    if (!text) {
      makeSectionData(allAttendees);
      return;
    }
    const str = text.toUpperCase();
    const filtered = allAttendees.filter((value: any) => {
      const {company = {title: ''}} = value || {};
      const {title = ''} = company || {};
      if (title && title.toUpperCase().includes(str)) return true;
    });
    makeSectionData(filtered);
  };

  const makeSectionData = array => {
    let obj = {};
    for (const item of array) {
      const char = item.category ? item.category.name : 'Others';
      if (!obj[char]) {
        obj[char] = [];
      }
      obj[char].push(item);
    }
    const sections: any = [];
    for (const key in obj) {
      if (key) {
        sections.push({title: key, data: obj[key]});
      }
    }
    setAttendees(sections);
    setTimeout(() => setLoader(false), 1000);
  };

  return (
    <Container>
      <Header
        drawer
        navigation={navigation}
        title={'Exhibitors'}
        backArrow={false}
      />
      {props.loading || loader ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#780000" />
        </LoadingContainer>
      ) : (
        <Container>
          <SearchBar value={search} onChangeText={startSearching} />
          <Exhibitters
            loader={loader}
            navigation={navigation}
            sectionData={attendees}
          />
        </Container>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    exhibitors: state.EventDetailReducer.components.exhibitors,
    loading: state.EventDetailReducer.loading,
  };
};

export default connect(
  mapStateToProps,
  null,
)(index);
