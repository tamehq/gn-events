import Home from '../../event-common-code/screens/home/';
import Speakers from '../../event-common-code/screens/speakers/';
import Programme from '../../event-common-code/screens/programme/';
import Attendees from '../../event-common-code/screens/attendees/';
// import Polling from "../../event-common-code/screens/polling/";
import Chat from '../../event-common-code/screens/chat/';
import LiveFeed from '../../event-common-code/screens/liveFeed';
import Profile from '../../event-common-code/screens/profile/';
import Meeting from '../../event-common-code/screens/meetingBooking/';

const AppTitle = 'GN Hearing';
const AppWelcomeText = 'Welcome to\nGN Events';
const TabRoutes = {
  Home,
  Speakers,
  Programme,
  Attendees,
  LiveFeed,
  // Chat,
  // Polling,
  Meeting,
  Profile,
};
const DrawerRoutes = [
  {name: 'Home', icon: 'home', screen: 'Home'},
  {name: 'Programme', icon: 'programme', screen: 'Programme'},
  {name: 'Speakers', icon: 'speakers', screen: 'Speakers'},
  {name: 'Partners', icon: 'partners', screen: 'Partners'},
  {name: 'Exhibitors', icon: 'exhibitors', screen: 'Exhibitors'},
  // { name: 'Venue', icon: 'venue' },
  // { name: 'News & Updates', icon: 'newsupdates' },
  {name: 'Live Feed', icon: 'livefeed', screen: 'LiveFeed'},
  {name: 'Attendees', icon: 'attendees', screen: 'Attendees'},
  // {name: 'Chat', icon: 'chat', screen: 'Chat'},
  {name: 'Meeting Booking', icon: 'meeting', screen: 'Meeting'},
];

export {TabRoutes, DrawerRoutes, AppTitle, AppWelcomeText};
