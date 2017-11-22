const defaultState = {
  news: []
}

const articlesReducer = (state = defaultState, action) => {
  if (action.type === "ARTICLES") {
    // console.log("Hai ", action.payload);
    return {...state, news: action.payload}
  }

  return state
}

export default articlesReducer
