import Store from './store';

export const SET_PAGE = 'SET_PAGE';
export const LOAD_IMG = 'LOAD_IMG';

export const setPage = (page) => {
  Store.dispatch({
    type : SET_PAGE,
    page
  });
};

export const load = (page) => {
  Store.dispatch({
    type : LOAD_IMG,
    page
  });
};
