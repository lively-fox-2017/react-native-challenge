const initState = {
    title: 'Welcome to React Tech News',
    items: []
}
function rootReducer(state = initState, action) {
    switch(action.type) {
        case 'FETCH_NEWS' :
            return {...state, items: action.payload}
        default:
            return state
    }
}

export default rootReducer