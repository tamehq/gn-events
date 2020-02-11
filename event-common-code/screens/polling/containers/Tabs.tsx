import * as React from 'react';
import {Dimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import Header from '../../../components/Header';
import PollScreen from './Polls';
import QuestionsScreen from './Questions';
import {ThemeContext} from "../../../../App";

const initialLayout = {width: Dimensions.get('window').width};

function TopTabs(props) {
  const theme = React.useContext(ThemeContext)
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'QUESTIONS'},
    {key: 'second', title: 'POLLS'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <QuestionsScreen {...props} />;
      case 'second':
        return <PollScreen {...props} />;
      default:
        return null;
    }
  };

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: theme.color.primary, height: 3}}
        style={{backgroundColor: 'white', marginTop: 1, elevation: 0}}
        labelStyle={{color: 'rgb(13, 42, 67)'}}
      />
    );
  };

  const goBack = () => props.navigation.pop();

  const title = props.navigation.getParam('title', '');
  return (
    <>
      <Header title={title} onPress={goBack} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </>
  );
}

export default TopTabs;
