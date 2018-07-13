const defaultState = {
  articles:[]
}


const NewsReducer = (state=defaultState,action)=>{
  switch (action.type){
    case 'GetNews' :
      return {...state , articles:action.payload.news}
    default:
      return state
  }
}

export default NewsReducer
