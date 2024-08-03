<template>
    <Swiper 
        :autoplay="{
            delay : 4000
        }"
        :slidesPerView="1"
        :spaceBetween="20"
        :pagination="{
            clickable : true
        }"
        :modules="[ Autoplay, Pagination, Navigation ]"
        :breakpoints="title === '熱門企業' && {
            '640':{
                slidesPerView : 2,
                slidesPerGroup : 2
            },
            '768':{
                slidesPerView : 3,
                slidesPerGroup : 3
            },
            '1024':{
                slidesPerView : 6,
                spaceBetween : 10
            }
        }"
        class="mySwiper"
    >
        <SwiperSlide v-for="item in data" :key="item.title">
            <template v-if="title === '熱門企業'">
                <CardItems class="mb-10 lg:mb-3">
                    <template #default>
                        <div class="flex justify-center items-center flex-col item-card cursor-pointer">
                            <img :src="item.img" :alt="item.title" class="h-12 mb-7 object-cover">
                            <div class="mb-3 card-title font-semibold text-center">{{ item.title }}</div>
                            <div v-for="data in item.content" :key="data" class="mb-3 font-normal text-gray-400 text-sm text-center">{{ data }}</div>
                            <div class="font-semibold text-primary text-center">工作機會(99+)</div>
                        </div>
                    </template>
                </CardItems>
            </template>
            <template v-else>
                <CardItems class="mb-10" style="padding: 0;">
                    <template #default>
                        <div class="flex cursor-pointer featured-container item-card flex-col sm:flex-row">
                            <div class="left-content rounded-t-lg w-full sm:rounded-tr-none sm:rounded-l-lg">
                                <img :src="item.img" :alt="item.title" class="w-full h-full rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg object-cover">
                            </div>
                            <div class="flex flex-col right-content p-4">
                                <div class="text-link font-bold pb-2">{{ item.title }}</div>
                                <div class="text-sm text-gray-500 pb-2">{{ item.subtitle }}</div>
                                <ul class="list-disc">
                                    <li v-for="data in item.content" :key="data" class="text-sm ml-5 pb-1">{{ data }}</li>
                                </ul>
                            </div>
                        </div>
                    </template>
                </CardItems>
            </template>
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CardItems from '../CardItems.vue';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const { title, data } = defineProps(['title', 'data']);
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;

  .swiper-wrapper{
    padding-bottom: 3rem !important;

    .swiper-slide {
        // display: flex;
        // justify-content: center;
        // align-items: center;

        .left-content{
            height: 200px;
        }
    }
  }
}

.item-card{
    &:hover{
        .card-title{
            color: #ff7800;
        }
    }
}

@media screen and (min-width : 640px){
   .featured-container{
        .left-content{
            width: 200px;
            height: 164px !important;
        }
    } 
}
</style>