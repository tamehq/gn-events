import React from 'react';
import {connect} from 'react-redux';
import {View, ActivityIndicator} from 'react-native';
import {fetchProgramme} from './module/actions/index';
import TopTabs from './Programme';
import moment from 'moment';
import {ThemeContext} from "../../../App";

interface EventInterface {
  timeZone: any;
}

interface IndexInterface {
  splits: [];
  tasks: any[];
  event: EventInterface;
  rooms: [];
  navigation: any;
  fetchProgramme: (string) => void;
}

function ProgrammeContainer(props: IndexInterface) {
  const theme = React.useContext(ThemeContext)
  const {tasks, splits, event} = props;
  const {timeZone} = event;
  const [activeDay, setActiveDay] = React.useState('AllDays');
  const [routes, setRoutes] = React.useState<any>([]);
  const [tabData, setTabData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(true);
  const [activeEvent] = React.useState(
    props.navigation.getParam('activeEvent'),
  );

  React.useEffect(() => {
    if (refresh) {
      (async function() {
        setRefresh(false);
        await props.fetchProgramme(activeEvent); //activeEvent
      })();
    }
    if (!refresh) createTabs();
  }, [props]);

  const getMMDD = (start, timeZone) =>
    moment
      .utc(start)
      .add(timeZone, 'minutes')
      .format('MMMDD');

  const getMM_DD = (start, timeZone) =>
    moment
      .utc(start)
      .add(timeZone, 'minutes')
      .format('MMM DD');

  const getRoute = (key, title, date) => ({
    key: key,
    title: title,
    date: date,
  });

  const createTabs = () => {
    try {
      const {splits} = props;
      if (event) {
        let dates: string[] = [];
        if (splits) {
          const routes: {
            key: string;
            title: string;
            date: string;
          }[] = splits.map(value => {
            const {start, _key} = value;
            let date = getMM_DD(start, timeZone);
            let dateToSave = getMMDD(start, timeZone);
            dates.push(dateToSave);
            return getRoute(_key, date, dateToSave);
          });
          if (splits.length > 1) {
            routes.unshift(getRoute('AllDays', 'AllDays', 'AllDays'));
            dates.unshift('AllDays');
          }
          setRoutes(routes);
          newCreateTabData(dates);
        }
      }
    } catch (error) {
      console.error('error in splits');
    }
  };

  const newCreateTabData = dates => {
    try {
      var programme: any[] = [];
      dates.forEach(date => {
        programme[date] = tasks.filter((task: any) => {
          const startDate = getMMDD(task.start, timeZone);
          return startDate === date;
        });
        programme[date].sort(function(a, b) {
          return new Date(b.finish) - new Date(a.finish);
        });
        return programme[date].reverse();
      });
      if (splits.length > 1) {
        programme['AllDays'] = tasks;
      }
      setTabData(programme);
      setLoading(false);
    } catch (error) {
      console.warn('error in create tab data', error);
    }
  };

  function getTabData(key) {
    return tabData[key];
  }

  return (
    <>
      {loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={theme.color.primary} />
        </View>
      )}
      {!loading && (
        <TopTabs
          getTabData={getTabData}
          activeDay={activeDay}
          routes={routes}
          navigation={props.navigation}
          timeZone={timeZone}
          rooms={props.rooms}
        />
      )}
    </>
  );
}

const mapStateToProps = state => {
  const programme = state;
  return {
    splits: programme.programme.splits,
    tasks: programme.programme.tasks,
    rooms: programme.programme.rooms,
    event: programme.programme.event,
  };
  // return programme
};

const mapActionCreators = {
  fetchProgramme,
};

export default connect(
  mapStateToProps,
  mapActionCreators,
)(React.memo(ProgrammeContainer));
