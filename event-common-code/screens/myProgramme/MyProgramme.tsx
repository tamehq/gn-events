import * as React from 'react';
import {View, Dimensions, FlatList, StyleSheet} from 'react-native';
import Card from './components/card';
import {TabView, TabBar} from 'react-native-tab-view';
import Header from '../../components/Header';

class MyProgramme extends React.Component<any, any> {
  state = {
    index: 0,
    routes: [{key: '0', title: ''}],
    modalVisible: false,
    programmes: [],
    dates: [],
    tabData: [],
  };

  componentDidMount = async () => {
    // console.log('routes', this.props);
    this.setState({
      routes: this.props.routes,
    });
  };

  componentDidUpdate = prevProps => {
    if (this.props.routes !== prevProps.routes) {
      this.setState({
        routes: this.props.routes,
      });
    }
  };

  TabData = props => {
    const Data = this.props.getTabData(props.route.date);
    return (
      <FlatList
        style={{width: '100%'}}
        data={Data}
        contentContainerStyle={{padding: 30}}
        keyExtractor={(_item, Index) => Index.toString()}
        renderItem={({item, index}) => (
          <Card
            {...item}
            {...this.props.navigation}
            activeDay={props.route.date}
            index={index}
            allRooms={this.props.rooms}
            refresh={this.props.refresh}
          />
        )}
      />
    );
  };

  renderScene = props => {
    if (
      Math.abs(this.state.index - this.state.routes.indexOf(props.route)) > 2
    ) {
      return <View />;
    }
    return <this.TabData {...props} />;
  };

  renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: 'rgb(120, 0, 0)', height: 3}}
        style={{backgroundColor: 'white', marginTop: 1}}
        labelStyle={{color: 'rgb(13, 42, 67)'}}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={'Programme'}
          backArrow={false}
          // right={true}
          // rightIcon={Filter}
          // onPress={this.showModal}
        />
        <TabView
          swipeEnabled={false}
          navigationState={this.state}
          renderScene={this.renderScene}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
          renderTabBar={this.renderTabBar}
        />
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
});

export default MyProgramme;
