import axios from 'axios'

export const loadNews = (news)=>{
  return {
    type: 'GetNews',
    payload:{
      news
    }
  }
}


export const fetchNews = ()=>{
  return (dispatch,getState)=>{
    axios.get('https://newsapi.org/v1/articles?source=ign&apiKey=58adf3a0fbb940bf8cf2f688c308ef7e')
    .then(({data})=>{
      return dispatch(loadNews(data.articles))
    }).catch(err=>{
      console.error(err);
    })
  }
}
