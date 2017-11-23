const initState = {
  berita: []
}

function BeritaReducer (state = initState, action) {
  console.log('----- ini reducers action payload -----> 4', action)
  switch (action.type) {
    case 'GET_BERITA':
      console.log('masuk kesini --------> 5 ya')
      return { ...state, berita: action.payload.berita }
    default:
      return state
  }
}

export default BeritaReducer
