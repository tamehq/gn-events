import React from 'react';
import {StatusBar, Dimensions, Animated, Easing} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Splash from '../../assets/images/splash/Loader.png';
import AsyncStorage from '@react-native-community/async-storage';

function index({navigation}) {
  const [width, setWidth] = React.useState(Dimensions.get('window').width);
  const [height, setHeight] = React.useState(Dimensions.get('window').height);
  const [fadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    // setTimeout(() => resetNavigator(), 3000);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => resetNavigator());
    Dimensions.addEventListener('change', handleDimensionChange);
    return () =>
      Dimensions.removeEventListener('change', handleDimensionChange);
  }, []);

  function handleDimensionChange() {
    const {width, height} = Dimensions.get('window');
    setWidth(width);
    setHeight(height);
  }

  async function resetNavigator() {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Tabs' })],
      });
      navigation.dispatch(resetAction);
    } else {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Login'})],
      });
      navigation.dispatch(resetAction);
    }
  }

  return (
    <>
      <StatusBar hidden={true} />
      <Animated.Image
        source={Splash}
        style={{
          width: width,
          height: height,
          transform: [
            {
              scaleY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.1],
              }),
            },
            {
              scaleX: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.1],
              }),
            },
          ],
        }}
      />
    </>
  );
}

export default index;
