const defaultState = {
  articles: [{
    title: '',
    urlToImage: 'tuturu'
  }],
  loading: true
}

const Articles = (state=defaultState, action) => {
  switch (action.type) {
    case 'GetArticles':
      return {...state, articles: action.payload.articles, loading: action.payload.loading}
    default :
      return state
  }
}

export default Articles
