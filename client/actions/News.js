import axios from 'axios'

export const setNews = (news) => {
  return {
    type: 'LOAD_NEWS',
    payload: {
      news
    }
  }
}

export const loadNewsFromApi = () => {
  return (dispatch, state) => {
    let url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e339ce0c756d41b4b750a34a5f778ccf'
    axios.get(url)
    .then(response => {
      return dispatch(setNews(response.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
