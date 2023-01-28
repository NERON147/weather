import { defineStore } from 'pinia'
import axios from 'axios'

export const useStoreWeather = defineStore('storeWeather', {
    state: () => {
        return {
          forecastday: [],
          wetherOnDay: []
        }
    },
    actions: {
     async get_weather(){
       await axios.get('https://api.weatherapi.com/v1/forecast.json?key=0367f744beb446a0bdc212240232501&q=auto:ip&&aqi=no&lang=ru&days=7&aqi=no&alerts=no')
        .then(res => {
          console.log(res.data.forecast.forecastday)
          return this.forecastday = res.data.forecast.forecastday
        })
      },
      async get_weather_on_day(){
        await axios.get('https://api.weatherapi.com/v1/forecast.json?key=0367f744beb446a0bdc212240232501&q=auto:ip&&aqi=no&lang=ru&days=7&aqi=no&alerts=no')
         .then(res => {
           console.log(res.data)
           return this.wetherOnDay.push(res.data.current)
         })
       }
    },
    getters: {
      GET_WEATHER(){
        return this.forecastday
      },
      GET_WEATHER_ON_DAY(){
        return this.wetherOnDay
      }
    }
})
