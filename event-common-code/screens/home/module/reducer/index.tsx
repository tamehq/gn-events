import {
  LOADING_EVENT_DETAIL_SUCCESS,
  LOADING_EVENT_DETAIL_FAILURE,
} from '../constants';

interface EventDetailInterface {
  organization: {
    id: String;
    description: String;
    images: Object;
    location: Object;
    title: String;
    website: String;
  };
  event: {
    id: String;
    contenxt: Object;
  };
  componentsOrder: String[];
  components: {
    exhibitors: {
      order: {};
      published: boolean;
    };
    organizations: {
      published: boolean;
    };
    partners: {
      order: {};
      settings: {};
    };
    sessions: {
      published: boolean;
    };
    speakers: {
      order: String[];
      published: boolean;
      settings: Object;
    };
    suppliers: {};
    tickets: {};
    venues: {
      published: boolean;
    };
  };
}

const initalState: EventDetailInterface = {
  //@ts-ignore
  organization: {},
  //@ts-ignore
  event: {},
  //@ts-ignore
  componentsOrder: {},
  //@ts-ignore
  components: {},
  loading: true,
};

interface ActionInterface {
  action: any;
  type: string;
  payload: EventDetailInterface;
}

function HomeReducer(state = initalState, action: ActionInterface) {
  const {type, payload} = action;
  switch (type) {
    case LOADING_EVENT_DETAIL_SUCCESS:
      return {...payload, loading: false};
    case LOADING_EVENT_DETAIL_FAILURE:
      return {...state, loading: false};
    default:
      return state;
  }
}

export default HomeReducer;
