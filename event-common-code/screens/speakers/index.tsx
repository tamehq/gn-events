import React from 'react';
import Speakers from './Speakers';
import {
  getProgramme,
  fetchSpeakers,
  fetchPublicSettings,
} from './module/api/';

function index({navigation}) {
  const eventId = navigation.getParam('activeEvent');
  const [speakers, setSpeakers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [timeZone, setTimeZone] = React.useState(0);

  React.useEffect(() => {
    getSpeakers();
  }, []);

  const getSpeakers = async () => {
    try {
      const speakers = await fetchSpeakers(eventId);
      // const speakers = await fetchStagingSpeakers('');
      const programme = await getProgramme(eventId);
      console.log('programme in speakers', programme);
      if (speakers) {
        const activeSpeakers = speakers.filter(speaker => {
          if (speaker.status === 'confirmed') {
            const sessions = speaker.sessions.map(session => {
              const taskIndex = programme.tasks.findIndex(
                task => task._key === session._key,
              );
              if (taskIndex > -1) {
                const roomId = programme.tasks[taskIndex].rooms;
                if (roomId !== undefined) {
                  const roomIndex = programme.rooms.findIndex(
                    room => room._id === roomId,
                  );
                  if (roomIndex > -1) {
                    session.roomName = programme.rooms[roomIndex].title;
                    session.roomKey = programme.rooms[roomIndex]._key;
                  }
                }
              }
              return session;
            });
            return {...speaker, session: sessions};
          }
        });
        if (activeSpeakers.length > 0) {
          const published = await fetchPublicSettings(eventId);
          const speakers = published.components.speakers.settings;
          const publishedSpeakers = activeSpeakers.filter(speaker => {
            const keys = Object.keys(speakers);
            if (keys.includes(speaker.person._key)) {
              const publishedOrNot = speakers[speaker.person._key];
              if (publishedOrNot.published === true) return true;
            }
          });
          setTimeZone(programme.event.timeZone);
          setSpeakers(publishedSpeakers);
        }
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.warn('speakers fetching error');
    }
  };
  return (
    <Speakers
      navigation={navigation}
      speakers={speakers}
      loading={loading}
      timeZone={timeZone}
    />
  );
}

export default index;
