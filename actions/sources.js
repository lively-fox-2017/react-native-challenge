import axios from 'axios'
import shuffle from 'shuffle-array'

export const SetSources = (sources) => {
  return {
    type: 'GetSources',
    payload: {
      sources
    }
  }
}

export const GetSourcesFromApi = () => {
  return (dispatch, state) => {
    axios.get('https://newsapi.org/v2/sources?language=en&country=us&apiKey=5f0060b13e974711adcdbd1d10b62286').then((response) => {
      var randomed = shuffle(response.data.sources)
      var sources = []
      for (let i = 0; i < 5; i++) {
        sources.push(randomed[i])
      }
      return dispatch(SetSources(sources))
    }).catch((err) => {
      console.log(err);
    })
  }
}
