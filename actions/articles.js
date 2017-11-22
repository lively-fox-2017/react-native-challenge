import axios from 'axios'

export const SetArticles = (articles) => {
  return {
    type: 'GetArticles',
    payload: {
      articles,
      loading: false
    }
  }
}

export const GetArticlesFromApi = (source) => {
  return (dispatch, state) => {
    axios.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey=5f0060b13e974711adcdbd1d10b62286').then((response) => {
      return dispatch(SetArticles(response.data.articles))
    }).catch((err) => {
      console.log(err);
    })
  }
}
