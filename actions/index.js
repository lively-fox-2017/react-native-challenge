import axios from 'axios'

export const fetchNews = () => {
    return (dispatch) => {
        axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=5fe84556b6f9491cb1d7630ec0030f8c')
        .then(({data}) => {
            dispatch({
                type: 'FETCH_NEWS',
                payload: data
            })
        })
    }
}