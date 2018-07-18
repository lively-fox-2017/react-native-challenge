import {
  RECIEVE_TWEET,
  RECIVE_TRENDING
} from '../actions/TweetActions'

const defaultState = {
  trending: [],
  tweets: []
}

export default (state=defaultState, action) => {
  switch (action.type) {
    case RECIVE_TRENDING:
      return {...state, trending: action.payload.trending}
    case RECIEVE_TWEET:
      return {...state, tweets: action.payload.tweets}
    default:
      return state
  }
}
