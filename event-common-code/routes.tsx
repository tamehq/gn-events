import SplashScreen from "./screens/splash";
import LoginScreen from "./screens/login";
import VerifyTokenScreen from "./screens/login/container/VerifyTicket";
import ProgrammeScreen from "./screens/programme";
import ProfileScreen from "./screens/profile";
import OnBoardingScreen from "./screens/onBoarding";
import EditProfileScreen from "./screens/profile/containers/EditProfile";
import BottomTabs from "./screens/bottomTabs";
import NewsAndUpdateScreen from "./screens/newsAndUpdate";
import VenueScreen from "./screens/venue";
import ProgrammeDrawer from "./screens/programme/container/drawer";
import EventSelection from "./screens/eventSelection";
import Speakers from "./screens/speakers";
import SpeakersDrawer from "./screens/speakers/containers/SpeakerDrawer";
import PollingTabs from "./screens/polling/containers/Tabs";
import AskQuestion from "./screens/polling/components/AskQuestion";
import DKNews from "./screens/newsAndUpdate/containers/DKnews";
import LiveFeed from "./screens/liveFeed";
import WriteNewPost from "./screens/liveFeed/containers/WriteNewPost";
import AttendeeProfile from "./screens/attendees/containers/AttendeeProfile";
import Chat from "./screens/chat";
import ChatScreen from "./screens/chat/containers/ChatScreen";
import Attendees from "./screens/attendees";
import Partners from "./screens/partners";
import Exhibitors from "./screens/exhibitors";
import ExhibitorsDrawer from "./screens/exhibitors/containers/ExhibitorsDrawer";

export const commonNavigator = {
  Splash: {
    screen: SplashScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  VerifyToken: {
    screen: VerifyTokenScreen,
  },
  Programme: {
    screen: ProgrammeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  OnBoarding: {
    screen: OnBoardingScreen,
  },
  EditProfile: {
    screen: EditProfileScreen,
  },
  Tabs: {
    screen: BottomTabs,
  },
  News: {
    screen: NewsAndUpdateScreen,
  },
  Venue: {
    screen: VenueScreen,
  },
  ProgrammeDrawer: {
    screen: ProgrammeDrawer,
  },
  EventSelection: {
    screen: EventSelection,
  },
  Speakers: {
    screen: Speakers,
  },
  SpeakersDrawer: {
    screen: SpeakersDrawer,
  },
  PollingTabs: {
    screen: PollingTabs,
  },
  AskQuestion: {
    screen: AskQuestion,
  },
  DKNews: {
    screen: DKNews,
  },
  LiveFeed: {
    screen: LiveFeed,
  },
  WriteNewPost: {
    screen: WriteNewPost,
  },
  AttendeeProfile: {
    screen: AttendeeProfile,
  },
  Chat: {
    screen: Chat,
  },
  ChatScreen: {
    screen: ChatScreen,
  },
  Attendees: {
    screen: Attendees,
  },
  Partners: {
    screen: Partners,
  },
  Exhibitors: {
    screen: Exhibitors,
  },
  ExhibitorsDrawer: {
    screen: ExhibitorsDrawer,
  }
}

