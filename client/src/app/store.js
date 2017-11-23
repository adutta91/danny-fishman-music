import { createStore } from 'redux';

import {
  SET_PAGE,
  LOAD_IMG,
  SET_VIDEO
} from './actions';

const initialState = {
  page   : null,
  loaded : [],
  video  : {}
};

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PAGE: return { ...state  , page : action.page };
    case LOAD_IMG: return { ...state  , loaded : state.loaded.concat([action.page]) };
    case SET_VIDEO: return { ...state , video : action.video };
    default: return state;
  }
};

const AppStore = createStore(AppReducer);
export default AppStore;
