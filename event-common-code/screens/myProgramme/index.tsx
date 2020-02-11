import React from 'react';
import {withNavigationFocus} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';
import Programme from './MyProgramme';
import moment from 'moment';

function index(props: any) {
  const [saved, setSaved] = React.useState([]);
  const [routes, setRoutes] = React.useState([]);

  React.useEffect(() => {
    getSaved();
    const focusListener = props.navigation.addListener('willFocus', () => {
      getSaved();
    });
    return () => focusListener.remove();
  }, []);

  async function getSaved() {
    try {
      let myArrayfavourites = await AsyncStorage.getItem('favCards');
      if (myArrayfavourites !== null) {
        myArrayfavourites = JSON.parse(myArrayfavourites);
        console.log('saved list', myArrayfavourites);
        setSaved(myArrayfavourites);
        createTabs(myArrayfavourites);
      }
      console.log('null');
    } catch (error) {
      console.warn('fav card retrieve error', error);
    }
  }

  function createTabs(favList) {
    try {
      if (saved) {
        console.log('fav list', favList);
        let keys = Object.keys(favList);
        console.log('keys list', keys);
        let routesList = [];
        keys.forEach(key => {
          if (key === 'AllDays') {
            routesList.push({
              key: 'AllDays',
              title: 'All Days',
              date: 'AllDays',
            });
          } else {
            if (favList[key].length > 0) {
              // this will check if that date contains some data or not
              let startTime = favList[key][0].start;
              let timeZone = favList[key][0].t;
              if (startTime) {
                let date = moment
                  .utc(startTime)
                  .add(60, 'minutes')
                  .format('MMM DD');
                let dateToSave = moment
                  .utc(startTime)
                  .add(60, 'minutes')
                  .format('MMMDD'); // variable cantcontain spaces
                routesList.push({
                  key: dateToSave,
                  title: date,
                  date: dateToSave,
                });
              }
            }
          }
        });
        setRoutes(routesList);
        console.log('routes list', routesList);
      }
    } catch (error) {
      console.warn('fav card create tabs error', error);
    }
  }

  function getTabData(key) {
    console.log('keysss', key);
    return saved[key];
  }

  return (
    <>
      <Programme
        getTabData={getTabData}
        routes={routes}
        navigation={props.navigation}
        refresh={getSaved}
      />
    </>
  );
}

export default withNavigationFocus(index);
