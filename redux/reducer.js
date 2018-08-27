import initialState from './initialState'

import { reducer as redditReducer } from './redditReducer'


const reducers = [
    redditReducer
];

export default function reducer(state = initialState, action) {
  let newState
  switch (action.type) {
    default:
      newState = state
      break
  }
  return reducers.reduce((s, r) => r(s, action), newState)
}
