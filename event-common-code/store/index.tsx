import {createStore, applyMiddleware, combineReducers} from 'redux';
import programmeReducer from '../screens/programme/module/reducer/index';
import thunk from 'redux-thunk';
import EventDetailReducer from '../screens/home/module/reducer/';

const combined = combineReducers({
  // @ts-ignore
  programme: programmeReducer,
  EventDetailReducer: EventDetailReducer,
});

const store = createStore(combined, applyMiddleware(thunk));

export default store;
