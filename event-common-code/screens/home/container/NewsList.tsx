import React from 'react';
import {FlatList} from 'react-native';
import Banner from '../../../assets/images/newsAndUpdate/bulb.png';
import Dknews from '../../../assets/images/newsAndUpdate/dk_news.png';
import Card from '../components/NewsCard';
import Logo from '../../../assets/images/newsAndUpdate/logo.png';

const Data = [
  {
    image: Banner,
    date: 'NOV 29 2019',
    time: '09:00',
    banner: Banner,
    logo: Logo,
    heading: 'Welcome to the new global NNIT event app.',
    description: `A One NNIT tool for all our events in NNIT.

With this app, you will get fast and easy access to your personal program. In here, you will find all details such as QR codes for entry and other practical information you need to have a fantastic event.

You can also receive push information about potential changes to the event program.

We hope you enjoy the new modern design and that you find the app easy to use.

Stay tuned for new updates.
Global Event Mgt.`,
  },
];

const DKNews = [
  {
    image: Dknews,
    date: 'JAN 27 2020',
    time: '09:00',
    banner: Dknews,
    logo: Logo,
    heading:
      'Kickoff dinner & party: Explore the venue to taste the delicious range of street food and drink choices!',
    description: `Kickoff dinner & party: Explore the venue to taste the delicious range of street food and drink choices!s`,
  },
  {
    image: Banner,
    date: 'NOV 29 2019',
    time: '09:00',
    banner: Banner,
    logo: Logo,
    heading: 'Welcome to the new Global NNIT event app.',
    description: `A One NNIT tool for all our events in NNIT.

With this app, you will get fast and easy access to your personal program. In here, you will find all details such as QR codes for entry and other practical information you need to have a fantastic event.

You can also receive push information about potential changes to the event program.

We hope you enjoy the new modern design and that you find the app easy to use.

Stay tuned for new updates.
Global Event Mgt.`,
  },
];

export interface ViewNewsInterface {
  image: File;
  date: string;
  heading: string;
  description: string;
  activeEvent: string;
  index: number;
}

const ViewNews = ({navigation, activeEvent}) => {
  return (
    <FlatList
      style={{marginTop: 15}}
      contentContainerStyle={{
        paddingLeft: 25,
        paddingRight: 15,
        paddingBottom: 5,
        justifyContent: 'flex-start'
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={activeEvent === '98729393' ? DKNews : Data}
      keyExtractor={(item: any, index) => item.id || index.toString()}
      renderItem={({item, index}) => (
        <Card
          item={item}
          navigation={navigation}
          activeEvent={activeEvent}
          index={index}
        />
      )}
    />
  );
}

export default ViewNews;
