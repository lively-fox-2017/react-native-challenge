const initState = {
    title: 'Welcome to React Tech News',
    items: [],
    details: []
}
function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'FETCH_NEWS' :
            return {...state, items: action.payload}
        case 'FETCH_DETAIL':
            return {...state, details: action.payload}
        default:
            return state
    }
}

export default rootReducer