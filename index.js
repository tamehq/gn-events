/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import MyRootComponent from './App';
import {name as appName} from './app.json';

function App() {
  return <MyRootComponent />;
}

AppRegistry.registerComponent(appName, () => App);
