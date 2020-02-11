import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Content from '../components/drawerContent';
import Styled from 'styled-components/native';
import Header from '../../../components/Header';
import {connect} from 'react-redux';
import moment from 'moment';
import gql from 'graphql-tag';
import VectorIcon from "../../../components/VectorIcon";
import {TagsClient} from "../../../graphQl";

const GET_TAGS = gql`
  query getTagAssociatons($resourceType: ResourceType!, $eventId: String!) {
    eventTagAssociationsByResourceType(
      resourceType: $resourceType
      eventId: $eventId
    ) {
      id
      resourceId
      eventTag {
        name
        color
      }
    }
  }
`;

const Container = Styled.View`
  flex: 1;
  background-color: ${props => props.theme.color.screenBg};
  justify-content: space-between;
`;

const NavigationView = Styled.View`
  width: 100%;
  height: 50px;
  padding: 0px 30px 0px 30px;
  background-color: #ffffff;
  justify-content: center;
`;

const Controls = Styled.View`
  flex-direction: row;
`;

const ControlView = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 15px;
  align-items: center;
`;

const HorizontalSeprator = Styled.View`
  width: 1;
  background-color: ${props => props.theme.color.separator};
  height: 30px;
  margin-left: 13px;
  opacity: 0.31;
`;

const KeynoteName = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 15px;
  font-family: ${props => props.theme.fontFamilies.latoBold};
  font-weight: bold;
  width: 200px;
  text-align: center;
`;

const LeftArrowPress = Styled.TouchableOpacity`
  align-self: center;
`;

const RightArrowPress = Styled.TouchableOpacity`
  align-self: center;
`;

interface DrawerInterface {
  navigation: any;
  activeDay: string;
  splits: [];
  tasks: [];
  rooms: [];
  event: {
    timeZone: string;
  };
  activeIndex: number;
}

function Drawer(props: DrawerInterface) {
  const {navigation} = props;
  const {activeDay} = props.navigation.state.params;
  const {rooms} = props;
  const [drawerData, setDrawerData] = React.useState([{title: ''}]);
  const [loading, setLoading] = React.useState(true);
  const [activeEvent] = React.useState(navigation.getParam('activeEvent', ''));
  const [tags, setTags] = React.useState([]);
  const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    createDrawerContent();
    getTags();
  }, []);

  const [activeIndex, setActiveIndex] = React.useState(0);
  // const {title} = drawerData[activeIndex];

  function nextProgramme(index: number, data) {
    try {
      let programme;
      if (index < data.length - 1) {
        programme = data[index + 1];
      } else {
        programme = data[0];
      }
      if (programme.title !== undefined) {
        setTitle(programme.title);
      }
    } catch (error) {
      console.log('error when creating name drawer.tsx ');
    }
  }

  function goToNextArticle() {
    let length = drawerData.length - 1;
    if (activeIndex === length) {
      setActiveIndex(0);
      nextProgramme(0, drawerData);
    } else {
      setActiveIndex(activeIndex + 1);
      nextProgramme(activeIndex + 1, drawerData);
    }
  }

  function gotToPrevArticle() {
    let length = drawerData.length - 1;
    if (activeIndex === 0) {
      setActiveIndex(length);
      nextProgramme(length, drawerData);
    } else {
      setActiveIndex(activeIndex - 1);
      nextProgramme(activeIndex - 1, drawerData);
    }
  }

  const getTags = () => {
    TagsClient.query({
      query: GET_TAGS,
      variables: {
        resourceType: 'ProgrammeSession',
        eventId: activeEvent,
      },
    })
      .then((data: any) => {
        if (data && data.data.eventTagAssociationsByResourceType) {
          setTags(data.data.eventTagAssociationsByResourceType);
        }
      })
      .catch(error => {
        console.log('tags getting error', error);
      });
  };

  const createDrawerContent = () => {
    const {tasks, event} = props;
    const {timeZone} = event;
    let data: any[] = [];
    try {
      if (activeDay === 'AllDays') {
        tasks.forEach((task: {start: string}) => {
          data.push(task);
        });
        // data.sort(function(a,b) {
        //   return new Date(b.finish) - new Date(a.finish);
        // });
        // data.reverse();
      } else {
        tasks.forEach((task: {start: string}) => {
          let taskDate = moment
            .utc(task.start)
            .add(timeZone, 'minutes')
            .format('MMMDD');
          if (taskDate === activeDay) {
            data.push(task);
          }
        });
        data.sort(function(a, b) {
          return new Date(b.finish) - new Date(a.finish);
        });
        data.reverse();
      }
      setDrawerData(data);
      setActiveIndex(props.navigation.state.params.activeIndex);
      if (data.length > 1) {
        nextProgramme(props.navigation.state.params.activeIndex, data);
      }
      setLoading(false);
    } catch (error) {
      console.error('error in create drawer data');
    }
  };

  function goBack() {
    navigation.pop();
  }

  return (
    <SafeAreaView style={{flex: 1}} forceInset={{top: 'never'}}>
      <Container>
        <Header onPress={goBack} title={'Programme'} />
        <FlatList
          listKey={'0'}
          data={[drawerData[activeIndex]]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <Content
              {...item}
              allRooms={rooms}
              timeZone={props.event.timeZone}
              tags={tags}
            />
          )}
        />
        <NavigationView>
          <ControlView>
            <Controls>
              <LeftArrowPress onPress={gotToPrevArticle}>
                <VectorIcon name='backarrow' size={20} />
              </LeftArrowPress>
              <HorizontalSeprator />
            </Controls>
            <KeynoteName numberOfLines={1}>{title}</KeynoteName>
            <RightArrowPress onPress={goToNextArticle}>
              <VectorIcon name='backarrow' size={20} />
            </RightArrowPress>
          </ControlView>
        </NavigationView>
      </Container>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  const {programme} = state;
  return {
    splits: programme.splits,
    tasks: programme.tasks,
    rooms: programme.rooms,
    event: programme.event,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Drawer);
