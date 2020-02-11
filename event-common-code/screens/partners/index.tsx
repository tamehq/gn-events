import React from 'react';
import Partners from './Partners';
import {cloneDeep} from 'lodash';
import {fetchPartnersList} from './module/api';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import {ActivityIndicator} from 'react-native';
import {Container, LoadingContainer} from './StyledComponents';
import {connect} from 'react-redux';

const index = props => {
  const {navigation} = props;
  const eventId = navigation.getParam('activeEvent');
  const [partners, setpartners] = React.useState<any>([]);
  const [allpartners, setAllpartners] = React.useState<any>([]);
  const [loader, setLoader] = React.useState(true);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    getPartners();
  }, [props.partners]);

  const getPartners = async () => {
    try {
      if (!props.loading) {
        if (props.partners && props.partners.published === true) {
          const partners = await fetchPartnersList(eventId);
          console.log('partnersss', partners);
          if (partners) {
            const activePartners = partners.filter(partner => {
              if (props.partners.settings[partner.id] !== undefined) {
                if (props.partners.settings[partner.id].published === true)
                  return true;
              }
              return false;
            });
            setAllpartners(activePartners);
            makeSectionData(activePartners);
          }
        } else {
          setLoader(false);
        }
      }
    } catch (error) {
      setLoader(false);
      console.warn('partners fetching error', error);
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
      makeSectionData(allpartners);
      return;
    }
    const str = text.toUpperCase();
    const filtered = allpartners.filter((value: any) => {
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
    setpartners(sections);
    setTimeout(() => setLoader(false), 1000);
  };

  return (
    <Container>
      <Header
        drawer
        navigation={navigation}
        title={'Partners'}
        backArrow={false}
      />
      {loader ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#780000" />
        </LoadingContainer>
      ) : (
        <Container>
          <SearchBar value={search} onChangeText={startSearching} />
          <Partners
            navigation={navigation}
            sectionData={partners}
            loading={loader}
          />
        </Container>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  const {EventDetailReducer} = state;
  return {
    partners: EventDetailReducer.components.partners,
    loading: EventDetailReducer.loading,
  };
};

export default connect(
  mapStateToProps,
  null,
)(index);
