import axios from 'axios'

const http = axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1/'
})

export const getAllData = (params) =>{
    // alert('data fetched !' + JSON.stringify(params))
    return {
        type: 'GET_ALL_DATA',
        payload: params
    }
}

export const getSearch = (params) => {
    return {
        type: 'GET_SEARCH',
        payload: params
    }
}

export const getAllDataZoma = (params) => {
    return (dispatch) => {
        http.get('/categories',{
            headers: {
                "user-key": 'ea4bd97a1f2b8f0c8d3293d8c1e592d9'
            }
        })
        .then(({data}) =>{
            console.log(data)
            dispatch(getAllData(data))
        })
    }
}

export const getSearchZoma = (params) => {
    return {
        type: 'OGI'
    }
}