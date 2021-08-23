import axios from 'axios'

export const $axios = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000
})

export const install = (Vue) => {
  Vue.prototype.$axios = $axios
}
