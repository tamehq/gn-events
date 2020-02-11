import {Alert, Dimensions, Platform, StatusBar} from 'react-native';
import Permissions, { RESULTS, openSettings } from 'react-native-permissions'
import {getPermissionMsg} from "../../src/themes/constants";

export function isIphoneX(): boolean {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      (dimen.height === 896 || dimen.width === 896))
  );
}

export function ifIphoneX(iphoneXStyle: number, regularStyle: number): number {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe: boolean): number {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export function getBottomSpace(): number {
  return isIphoneX() ? 34 : 0;
}

export const checkPermission = (type) => {
  const { title, message } = getPermissionMsg(type)
  return Permissions.check(type)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            Alert.alert('Permission', 'Sorry This feature is not available.')
            break;
          case RESULTS.DENIED:
           return Permissions.request(type, {title, message, buttonPositive: 'Ok'})
               .then(res => console.log('permission Result', res))
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
              showSettingsDialog(title, message)
            break;
        }
      })
      .catch((error: any) => {
        console.log(error)
      });
}

const showSettingsDialog = (title, message) => {
  Alert.alert(title, message, [
    { text: 'Cancel', style: 'cancel' },
    { text: 'Settings', onPress: () => openSettings() }
  ])
}
