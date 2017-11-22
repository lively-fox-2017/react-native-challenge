const defaultState = {
  news: []
}

const articlesReducer = (state = defaultState, action) => {
  if (action.type === "ARTICLES") {
    return {..state, news: action.news}
  }

  return state
}

export default articlesReducer
