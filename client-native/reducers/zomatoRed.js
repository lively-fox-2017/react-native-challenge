const zomaState = {
    allData : [],
    bySearch: []
}

const zomaReducer = (state = zomaState, actions) =>{
    switch(actions.type){
        case 'GET_ALL_DATA':
        alert(JSON.stringify(actions.payload.categories)+ 'si JASON')
            // return state
            return { ...state, allData: actions.payload.categories}
        case 'GET_SEARCH':
            return state
                // return {...state, bySearch: actions.payload}
        default:
            return state
    }
}

export default zomaReducer