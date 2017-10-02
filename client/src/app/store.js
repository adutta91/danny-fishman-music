import { createStore } from 'redux';

import {
  SET_PAGE,
  LOAD_IMG
} from './actions';

const initialState = {
  page   : 'main',
  loaded : []
};

const AppReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PAGE: return { ...state, page : action.page };
    case LOAD_IMG: return { ...state, loaded : state.loaded.concat([action.page]) };
    default: return state;
  }
};

const AppStore = createStore(AppReducer);
export default AppStore;
