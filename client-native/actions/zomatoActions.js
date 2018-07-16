import axios from 'axios'

const http = axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1/'
})

export const getAllData = (params) =>{
    return {
        type: 'GET_ALL_DATA',
        payload: params
    }
}

export const getSearch = (params) => {
    // alert('data fetched !' + JSON.stringify(params[0].restaurant.name))
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
    alert('Get Search: ' + params)
    return (dispatch)=>{
        http.get(`/search?q=jakarta&category=${params}`,{
            headers: {
                "user-key": 'ea4bd97a1f2b8f0c8d3293d8c1e592d9'
            }
        })
        .then(({data}) => {
            alert('getSearch ' + JSON.stringify(data.restaurants[0]))
            dispatch(getSearch(data.restaurants))
        })
    }
}