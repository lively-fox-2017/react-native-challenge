const defaultState = {
  sources: [
  ]
}

const Sources = (state=defaultState, action) => {
  switch (action.type) {
    case 'GetSources':
      return {...state, sources: action.payload.sources}
    default :
      return state
  }
}

export default Sources
