import * as React from 'react';
import {
  View,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Query} from 'react-apollo';
import {ApolloProvider} from '@apollo/react-hooks';
import Card from './components/card';
import {TabView, TabBar} from 'react-native-tab-view';
import Header from '../../components/Header';
import gql from 'graphql-tag';
import {getColors} from './module/api';
import { withTheme } from 'styled-components';
import VectorIcon from "../../components/VectorIcon";
import {ProgrammeClient} from "../../graphQl";

export const GET_FAV_PROGRAMMES = gql`
  query attendeFavouritedProgrammeSessions {
    attendeFavouritedProgrammeSessions {
      id
      attendeeId
      eventId
      programmeSessionId
    }
  }
`;

class Programme extends React.Component<any, any> {
  state = {
    index: 0,
    routes: [{key: '0', title: ''}],
    modalVisible: false,
    programmes: [],
    dates: [],
    tabData: [],
    favProgrammee: [],
    activeEvent: this.props.navigation.getParam('activeEvent', ''),
    showFav: false,
    colors: [],
  };

  componentDidMount = async () => {
    const colors = await getColors(
      this.props.navigation.getParam('activeEvent', ''),
    );
    this.setState({
      routes: this.props.routes,
      colors: colors,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.routes !== prevProps.routes) {
      this.setState({
        routes: this.props.routes,
      });
    }
  };

  toggleFav = () => {
    this.setState({
      showFav: !this.state.showFav,
    });
  };

  getProgramme = (favProgrammee, activeEvent, date) => {
    try {
      var Data = [...this.props.getTabData(date)];
      const activeEventProgramme = favProgrammee.filter(
        (fav: any) => fav.eventId === activeEvent,
      );
      activeEventProgramme.map((fav: any) => {
        const favIndex = Data.findIndex(
          programme => programme._id === fav.programmeSessionId,
        );
        if (favIndex > -1) {
          Data[favIndex] = {
            ...Data[favIndex],
            removeId: fav.id,
            checked: true,
          };
        }
      });
      return Data;
    } catch (error) {
      console.log('date', date);
      console.log('error', error);
    }
  };

  getFav = (favourite, activeEvent, date) => {
    try {
      var Data = [...this.props.getTabData(date)];
      var FavData: any[] = [];
      const activeEventProgramme = favourite.filter(
        (fav: any) => fav.eventId === activeEvent,
      );
      activeEventProgramme.forEach(fav => {
        const favIndex = Data.findIndex(
          programme => programme._id === fav.programmeSessionId,
        );
        if (favIndex > -1) {
          FavData.push({
            ...Data[favIndex],
            removeId: fav.id,
            checked: true,
          });
        }
      });
      FavData.sort(function(a, b) {
        return new Date(a.finish) - new Date(b.finish);
      });
      return [...FavData];
    } catch (error) {
      console.log('error', error);
    }
  };

  TabData = props => {
    const {timeZone} = this.props;
    const {refetch} = props;
    console.log('eventhagfsd', timeZone);
    const {favProgrammee, activeEvent, showFav} = this.state;
    var Data: any = [];
    try {
      refetch();
      if (!showFav) {
        if (props.route.date !== undefined) {
          Data = this.getProgramme(
            props.data.attendeFavouritedProgrammeSessions,
            activeEvent,
            props.route.date,
          );
        }
      } else {
        Data = this.getFav(
          props.data.attendeFavouritedProgrammeSessions,
          activeEvent,
          props.route.date,
        );
      }
    } catch (error) {
      console.log('error', error);
    }
    const {image, OptionView} = styles;
    return (
      <ScrollView>
        <View style={OptionView}>
          <TouchableOpacity onPress={this.toggleFav}>
            <VectorIcon name={this.state.showFav ? 'like' : 'heart'} size={30} style={image}/>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{width: '100%'}}
          extraData={this.state.showFav}
          data={Data}
          contentContainerStyle={{padding: 30, paddingTop: 10}}
          keyExtractor={(_item, Index) => Index.toString()}
          renderItem={({item, index}) => (
            <Card
              {...item}
              {...this.props.navigation}
              activeDay={props.route.date}
              index={index}
              allRooms={this.props.rooms}
              refetch={refetch}
              colors={this.state.colors}
              timeZone={timeZone}
            />
          )}
        />
      </ScrollView>
    );
  };

  renderScene = props => {
    const {theme} = this.props
    if (
      Math.abs(this.state.index - this.state.routes.indexOf(props.route)) > 2
    ) {
      return <View />;
    }
    return (
      <Query query={GET_FAV_PROGRAMMES}>
        {({loading, error, data, refetch, networkStatus}) => {
          if (networkStatus === 4) return 'Refetching!';
          if (loading)
            return (
              <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size="large" color={theme.color.primary} />
              </View>
            );
          if (error) return null;
          return <this.TabData {...props} refetch={refetch} data={data} />;
        }}
      </Query>
    );
  };

  renderTabBar = props => {
    const {theme} = this.props
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: theme.color.primary, height: 3}}
        style={{backgroundColor: 'white', marginTop: 1}}
        labelStyle={{color: 'rgb(13, 42, 67)'}}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header
          drawer
          navigation={navigation}
          title={'Programme'}
          backArrow={false}
          right={false}
        />
        <ApolloProvider client={ProgrammeClient}>
          <TabView
            swipeEnabled={true}
            navigationState={this.state}
            renderScene={this.renderScene}
            onIndexChange={index => this.setState({index})}
            initialLayout={{width: Dimensions.get('window').width}}
            renderTabBar={this.renderTabBar}
          />
        </ApolloProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(247, 247, 247)',
  },
  OptionView: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },
  image: {
    alignSelf: 'flex-end',
  },
});

export default withTheme(Programme);
