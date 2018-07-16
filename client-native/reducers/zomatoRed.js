const zomaState = {
    allData : [],
    bySearch: []
}

const zomaReducer = (state = zomaState, actions) =>{
    switch(actions.type){
        case 'GET_ALL_DATA':
        // alert(JSON.stringify(actions.payload.categories)+ ' INSIDE REDUCERS')
            // return state
            return { ...state, allData: actions.payload.categories}
        case 'GET_SEARCH':
            // alert('DARI REDUCER ' + actions.payload[0].restaurant.name)
            // return state
                return {...state, bySearch: actions.payload}
        default:
            return state
    }
}

export default zomaReducer