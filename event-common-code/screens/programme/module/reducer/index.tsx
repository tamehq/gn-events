import {FETCH_PROGRAMME} from '../constants/';

const INITIAL_STATE: InitialState = {
  // @ts-ignore
  areas: [],
  colors: [],
  event: [],
  rooms: [],
  speakers: [],
  splits: [],
  tasks: [],
  tracks: [],
};

interface ProgarammeInterface {
  action: any;
  type: string;
  payload: never;
}

interface InitialState {
  programme: [];
}

function programmReducer(state = INITIAL_STATE, action: ProgarammeInterface) {
  const {type, payload} = action;
  switch (type) {
    case FETCH_PROGRAMME:
      return action.payload;
    default:
      return state;
  }
}

export default programmReducer;
