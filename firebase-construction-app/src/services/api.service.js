import axios from 'axios';

export const get = (url) =>{
    return axios.get(url)
}

export const post = (obj) => {
    return axios.post(obj.url, obj.data)
}
