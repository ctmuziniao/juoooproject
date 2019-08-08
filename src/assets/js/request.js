import Vue from "vue"
import axios from "axios"
import { Indicator } from 'mint-ui';
var instance = axios.create({
    baseURL: "/wp"
})
instance.interceptors.request.use( (config) => {
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
    return config
})
instance.interceptors.response.use( (res) => {
    Indicator.close();
    return res
})

Vue.prototype.$axios = instance