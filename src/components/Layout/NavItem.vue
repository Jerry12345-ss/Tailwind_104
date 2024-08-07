<template>
    <div class="nav-item flex h-full" @mouseenter="handleEnter" @mouseleave="handleLeave" @mouseover="handleEnter" @mouseout="handleLeave" >
        <div class="flex items-center">
            <template v-if="item?.content">
                <span class="text-black" :class="{ active : active === item.title }">{{ item.title }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" class="fill-black" :class="{ active : active === item.title }" style="transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
            </template>
            <template v-else>
                <a href="#" :class="{ active : active === item.title }">{{ item.title }}</a>
            </template>
        </div>

        <template v-if="item?.content">
            <div :class="[active === item.title ? 'block' : 'hidden']" class="nav-dropdown-container bg-white rounded-lg py-4 px-8" :style="{ left : !lastSecond && '0', width : lastSecond ? '268px' : '768px' }">
                <template v-if="item.content?.top">
                    <h5 class="text-gray-500 font-bold text-sm my-1">{{ item.content.top.title }}</h5>
                    <div class="grid grid-cols-3">
                        <a href="#" v-for="topItem in item.content.top.list" :key="topItem" class="p-5 rounded-lg item flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: rgb(255, 145, 0);transform: ;msFilter:;"><circle cx="12" cy="7.5" r="1.5"></circle><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"></path></svg>
                            <div class="ml-2">
                                <span class="font-bold text-base">{{ topItem }}</span>
                                <div class="text-gray-500 mt-3">測試文字</div>
                            </div>
                        </a>
                    </div>

                    <h5 class="text-gray-500 font-bold text-sm my-1">{{ item.content.bottom.title }}</h5>
                    <div class="grid grid-cols-3">
                        <a href="#" v-for="bottomItem in item.content.bottom.list" :key="bottomItem" class="p-5 rounded-lg item flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: rgb(255, 145, 0);transform: ;msFilter:;"><circle cx="12" cy="7.5" r="1.5"></circle><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"></path></svg>
                            <div class="ml-2">
                                <span class="font-bold text-base">{{ bottomItem }}</span>
                                <div class="text-gray-500 mt-3">測試文字</div>
                            </div>
                        </a>
                    </div>
                </template>
                <template v-else>
                    <template v-if="lastSecond">
                        <div v-for="topItem in item.content" :key="topItem" class="p-3 rounded-lg">
                            <div class="flex flex-col">
                                <span class="font-bold text-base">{{ topItem }}</span>
                                <div class="flex items-center">
                                    <a href="#">
                                        <img src="../../assets/img/applesotre-logo.jpg" alt="google-play" class="w-20 h-full">
                                    </a>
                                    <a href="#">
                                        <img src="../../assets/img/googleplay-logo.png" alt="google-play" class="w-28 h-full">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="grid grid-cols-3">
                            <a href="#" v-for="topItem in item.content" :key="topItem" class="p-5 rounded-lg item flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: rgb(255, 145, 0);transform: ;msFilter:;"><circle cx="12" cy="7.5" r="1.5"></circle><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"></path></svg>
                                <div class="ml-2">
                                    <span class="font-bold text-base">{{ topItem }}</span>
                                    <div class="text-gray-500 mt-3">測試文字</div>
                                </div>
                            </a>
                        </div>
                    </template>
                </template>
            </div>
        </template> 
    </div>
</template>

<script setup>
const { item, active, lastSecond } = defineProps(['item', 'active', 'lastSecond']);
const emit = defineEmits(['update:active']);

const handleEnter = () =>{
    emit('update:active', item.title);
}

const handleLeave = () =>{
    emit('update:active', null)
}
</script>

<style scoped lang="scss">
.nav-item{
    span, a{
        &.active{
            color: #ff7800;
        }
    }

    svg{
        &.active{
            fill: #ff7800;
            transform: rotate(180deg);
        }
    }

    .nav-dropdown-container{
        position: absolute;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1);
        top: 100%;
        z-index: 100000;

        .item{
            transition: all .3s ease-out;
            &:hover{
                background-color: rgba(253, 206, 153, 0.193);
            }
        }
    }
}
</style>