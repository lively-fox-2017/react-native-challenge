import axios from 'axios'

export const RECIEVE_TWEET = 'RECIEVE_TWEET'
export const RECIVE_TRENDING = 'RECIVE_TRENDING'

const recieveTrending = (trending) => ({
  type: RECIVE_TRENDING,
  payload: {
    trending
  }
})

const recieveTrendingTweets = (tweets) => ({
  type: RECIEVE_TWEET,
  payload: {
    tweets
  }
})

export const fetchTrending = () => {
  return (dispatch, getState) => {
    return axios.get('https://us-central1-gcp-learn-184002.cloudfunctions.net/Hello_Function/?action=trends')
      .then(({data}) => dispatch(recieveTrending(data.trends)))
      .catch(reason => console.error(reason))
  }
}

export const fetchTrendingTweets = (query) => {
  return (dispatch, getState) => {
    return axios.get(`https://us-central1-gcp-learn-184002.cloudfunctions.net/Hello_Function/?action=search_tweet&q=${query}`)
      .then(({data}) => dispatch(recieveTrendingTweets(data.statuses)))
      .catch(reason => console.error(reason))
  }
}
