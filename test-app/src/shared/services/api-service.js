import axios from 'axios';
import Constants from '../../config/constant.js';


export default class ApiService {
    constructor() {
        console.log('constructor calling');
    }
    constant = new Constants();

    saveEntry = (data) => {
        return axios({
            method: 'post',
            url: this.constant.backEndUrl.saveEntryUrl,
            data
        });
    }
    getAllEntry = () => {
        return axios({
            method: 'get',
            url: this.constant.backEndUrl.getAllEntryUrl,
        });
    }

    getDataByQuery = (query) => {
        return axios({
            method: 'post',
            url: this.constant.backEndUrl.getDataByQuery,
            data: query
        });

    }
}