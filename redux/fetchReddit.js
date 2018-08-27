import axios from 'axios';
import {
    INNOCELLS_FETCH_REDDIT_BEGIN,
    INNOCELLS_FETCH_REDDIT_SUCCESS,
    INNOCELLS_FETCH_REDDIT_FAILURE,
    INNOCELLS_FETCH_REDDIT_DISMISS_ERROR,
} from './constants'; 
 

export function fetchRedditList() {
  return dispatch => {
    dispatch({
      type: INNOCELLS_FETCH_REDDIT_BEGIN
    });

    const promise = new Promise((resolve, reject) => {
      var config = {
        headers: {'Access-Control-Allow-Origin': '*'}
      };

      const doRequest = axios.get('https://api.reddit.com/r/pics/new.json', config);

      doRequest.then(
        res => {          
          dispatch({
            type: INNOCELLS_FETCH_REDDIT_SUCCESS,
            data: res.data.children
          });
          resolve(res);
        },
        err => {
          dispatch({
            type: INNOCELLS_FETCH_REDDIT_FAILURE,
            data: { error: err },
          });
          reject(err);
        }
      );
    });

    return promise;
  };
}

export function dismissFetchRedditsListError() {
  return {
    type: INNOCELLS_FETCH_REDDIT_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case INNOCELLS_FETCH_REDDIT_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        fetchRedditListPending: true,
        fetchRedditListError: null,
      };

    case INNOCELLS_FETCH_REDDIT_SUCCESS:
      // The request is success
      return {
        ...state,
        redditList: action.data,
        fetchRedditListPending: false,
        fetchRedditListError: null,
      };

    case INNOCELLS_FETCH_REDDIT_FAILURE:
      // The request is failed
      return {
        ...state,
        fetchRedditListPending: false,
        fetchRedditListError: action.data.error,
      };

    case INNOCELLS_FETCH_EVENTS_INFO_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        fetchRedditListError: null,
      };

    default:
      return state;
  }
}
