<template>
    <div class="mobileNav-list flex" :class="{ active : isMobile }">
        <div>
            <div v-for="item in navContent" :key="item.title" @click="handleNavContent(item.title)" class="flex items-center py-4 w-32 cursor-pointer pl-4" :class="{ active : currentNav === item.title }">
                <template v-if="item?.content">
                    <span :class="{ active : currentNav === item.title }" class="font-bold">{{ item.title }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-black" style="transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                </template>
                <template v-else>
                    <a href="https://www.google.com/?hl=zh_tw" target="_blank" class="font-bold" @click="$emit('update:isMobile', false)">{{ item.title }}</a>
                </template>
            </div>
        </div>
        <template v-if="itemContent?.content">
            <MobileNavContent :data="itemContent" :active="currentNav" :lastSecond="itemContentIndex === (navContent.length - 2)"/>
        </template>
    </div>
</template>

<script setup>
import { computed, ref, toRef, watch } from 'vue';
import navContent from '@/data/nav';
import MobileNavContent from './MobileNavContent.vue'; './MobileNavContent.vue';

const currentNav = ref('工作');
const props = defineProps(['isMobile']);
defineEmits(['update:isMobile']);

// 必須透過 arrow function 處理 toRef() 才有辦法達到響應式監聽
const isMobileRef = toRef(()=> props.isMobile);

const handleNavContent = (title) =>{
    currentNav.value = title;
}

const itemContent = computed(()=> navContent.find(item => item.title === currentNav.value));
const itemContentIndex = computed(() => navContent.findIndex(item => item.title === currentNav.value));

watch(isMobileRef, ()=>{
    currentNav.value = '工作';
})
</script>

<style lang="scss" scoped>
.mobileNav-list{
    // height: 0 !important;
    // transition: all .2s ease;

    .flex{
        &:hover{
            color: #ff7800;

            svg{
                fill: #ff7800;
            }
        }

        &.active{
            background-color: #eee;
            color: #ff7800;

            svg{
                fill: #ff7800;
            } 
        }
    }
}

// .mobileNav-list.active{
//     height: 100vh !important;
//     transition: all .2s ease;
// }
</style>