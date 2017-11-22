const defaultState = {
  news: []
}

const newsReducers = (state=defaultState, action) => {
  switch (action.type) {
    case 'LOAD_NEWS':
      return {...state, news: action.payload.news}
    default:
      return state
  }
}

export default newsReducers
