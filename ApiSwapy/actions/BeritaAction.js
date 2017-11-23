import axios from 'axios'

export const fetchBerita = () => {
  console.log('-----------> 1 ');
  return (dispatch, getState) => {
    var url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cae471f07529494b80feef7591afce50"
    axios.get(url)
    .then(({ data }) => {
      console.log('------->  2 ini hasil dari actions', data.articles)
      dispatch(getBerita( data.articles ))
    })
    .catch((err) => {
      console.error(err)
    })
  }
}

export const getBerita = (isiBerita) => {
  console.log('-------> 3 ', isiBerita);
  return {
    type: 'GET_BERITA',
    payload: {
      berita: isiBerita
    }
  }
}
