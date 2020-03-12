import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import store from './event-common-code/store/index';
import {Provider} from 'react-redux';
import {ApolloProvider} from '@apollo/react-hooks';
import codePush from 'react-native-code-push';
import {ThemeProvider} from 'styled-components';
import theme from './src/themes/theme';
import {commonNavigator} from './event-common-code/routes';
import {client} from './event-common-code/graphQl';
import {MenuProvider} from 'react-native-popup-menu';

const AppNavigator = createStackNavigator(commonNavigator, {
  initialRouteName: 'Splash',
  headerMode: 'none',
});

const Navigator = createAppContainer(AppNavigator);
export const ThemeContext = React.createContext(theme);
let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_START};
class App extends React.Component {
  componentDidMount(): void {
    // @ts-ignore
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <MenuProvider>
          <ThemeContext.Provider value={theme}>
            <ThemeProvider theme={theme}>
              <Provider store={store}>
                <Navigator />
              </Provider>
            </ThemeProvider>
          </ThemeContext.Provider>
        </MenuProvider>
      </ApolloProvider>
    );
  }
}

export default codePush(codePushOptions)(App);
