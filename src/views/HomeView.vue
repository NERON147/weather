<template>

  <div class="main bg-cover bg-center absolute h-screen w-screen">
    <swiper
    :effect="'flip'"
    :grabCursor="false"
    :navigation="{nextEl: '.toogle'}"
    :modules="modules.modules"
    :loop="true"
    :speed="1500"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="blur-screen blur-rotate flex justify-center  rounded-3xl">
      <div class="card-wrapper flex items-center flex-wrap gap-4" >
        <div :class="`card ca${index}`" v-for="(weather, index) in WEATHER" :key="index">
          <div class="">{{ weather.date }}</div>
          <div class=" text-pogoda pt-2">{{ weather.day.condition.text.toUpperCase() }}</div>
          <img class="ico-w" :src="weather.day.condition.icon" alt="">
          <div class="text-orange-200 text-6xl pt-3 text-center">{{ weather.day.maxtemp_c }}</div> 
          <div class="text-blue-200 text-3xl pt-2 text-center">{{ weather.day.mintemp_c }}</div> 
          <div class=" text-xs pt-6 font-bold">Подробнее:</div>
          <div class=" text-xs pt-2">Cкор. ветра: <span class="text-sm">{{ weather.day.maxwind_kph }} <span class="km">км/ч</span></span></div>
          <div class=" text-xs ">Осадки мм: <span class="text-sm">{{ weather.day.totalprecip_mm }}</span></div>
          <div class=" text-xs ">Видимость км: <span class="text-sm">{{ weather.day.avgvis_km }}</span></div>
          <div class=" text-xs ">Шанс дождя: <span class="text-sm">{{ weather.day.daily_chance_of_rain }} %</span></div>
          <div class="text-xs ">Шанс снега: <span class="text-sm">{{ weather.day.daily_chance_of_snow }} %</span></div>
        </div>
      </div>
    </div> 
    <button class="toogle" >Погода сейчас</button>
  </swiper-slide>
    <swiper-slide>
      <div class="blur-screen blur-rotate items-center text-center rounded-3xl" v-for="(day, index) in WEATHER_ON_DAY" :key="index">
        <img class="absolute right-0" :src="day.condition.icon" alt="">
        <div class="text-3xl pt-6">{{ day.last_updated }}</div>
        <div class="text-base font-black pt-6">{{day.condition.text}}</div>
        <div class="text-8xl pt-12">{{ day.temp_c }}<span class="text-base">°C</span></div>
        <div class="table-wrapper flex justify-center pt-10">
          <div class="box rounded-xl p-3">
            <div class="top flex justify-center gap-5">
              <div class="">
                <div class="">Облачность</div>
                <div class="text-2xl font-bold">{{ day.cloud }} %</div>
              </div>
              <div class="">
                <div class="">Ощущается</div>
                <div class="text-2xl font-bold">{{ day.feelslike_c }} </div>
              </div>
              <div class="">
                <div class="">Скорость ветра</div>
                <div class="text-2xl font-bold">{{ day.gust_kph }} </div>
              </div>
              <div class="">
                <div class="">Влажность</div>
                <div class="text-2xl font-bold">{{ day.humidity }} </div>
              </div>
              <div class="">
                <div class="">Осадки мм</div>
                <div class="text-2xl font-bold">{{ day.precip_mm }} </div>
              </div>
            </div>
            <div class="bottom flex justify-center gap-5 pt-3">
              <div class="">
                <div class="">Давление</div>
                <div class="text-2xl font-bold">{{ day.pressure_mb }}</div>
              </div>
              <div class="">
                <div class="">Видимость км</div>
                <div class="text-2xl font-bold">{{ day.vis_km }} </div>
              </div>
              <div class="">
                <div class="">УФ индекс</div>
                <div class="text-2xl font-bold">{{ day.uv }} </div>
              </div>
              <div class="">
                <div class="">Макс скор ветра</div>
                <div class="text-2xl font-bold">{{ day.wind_kph }} </div>
              </div>
              <div class="">
                <div class="">Сейчас</div>
                <div class="text-2xl font-bold">{{ day.temp_c }}<span class="text-base">°C</span> </div>
              </div>
            </div>
          </div>
        </div>
        
    </div> 
    <button class="toogle" >Погода на неделю</button>
  </swiper-slide>

    
  </swiper>
    
</div>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFlip, Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import {onMounted, computed, reactive } from 'vue';
import { useStoreWeather } from '@/stores/storeWeather.js'

const modules = reactive({
  modules: [EffectFlip, Pagination, Navigation]
})




const storeWeather = useStoreWeather()



const WEATHER = computed(() => {
    return storeWeather.GET_WEATHER
})

const WEATHER_ON_DAY = computed(() => {
  return storeWeather.GET_WEATHER_ON_DAY

})



onMounted(() => {
  storeWeather.get_weather()
  storeWeather.get_weather_on_day()
    });

</script>

<style>



</style>