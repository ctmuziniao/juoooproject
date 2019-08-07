import Vue from "vue"
import axios from "axios"

var instance = axios.create({
    baseURL: "/wp"
})
instance.interceptors.request.use( (config) => {
    return config
})
instance.interceptors.response.use( (res) => {
    return res
})

Vue.prototype.$axios = instance