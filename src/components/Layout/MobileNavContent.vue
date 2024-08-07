<template>
    <div class="flex-1 p-4" style="background-color: #eee;">
        <div :class="[active === data.title ? 'block' : 'hidden']">
            <template v-if="data.content?.top">
                <h5 class="text-gray-500 font-bold text-sm my-1">{{ data.content.top.title }}</h5>
                <div class="flex flex-col">
                    <a href="#" v-for="topItem in data.content.top.list" :key="topItem" class="py-2 rounded-lg item flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: rgb(255, 145, 0);transform: ;msFilter:;"><circle cx="12" cy="7.5" r="1.5"></circle><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"></path></svg>
                        <div class="ml-2">
                            <span class="font-bold text-base">{{ topItem }}</span>
                        </div>
                    </a>
                </div>

                <h5 class="text-gray-500 font-bold text-sm my-2">{{ data.content.bottom.title }}</h5>
                <div class="flex flex-col">
                    <a href="#" v-for="bottomItem in data.content.bottom.list" :key="bottomItem" class="py-2 rounded-lg item flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: rgb(255, 145, 0);transform: ;msFilter:;"><circle cx="12" cy="7.5" r="1.5"></circle><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"></path></svg>
                        <div class="ml-2">
                            <span class="font-bold text-base">{{ bottomItem }}</span>
                        </div>
                    </a>
                </div>
            </template>
            <template v-else>
                <template v-if="lastSecond">
                    <div v-for="topItem in data.content" :key="topItem" class="pb-2">
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
                    <div class="flex flex-col">
                        <a href="#" v-for="topItem in data.content" :key="topItem" class="py-2 rounded-lg item flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: rgb(255, 145, 0);transform: ;msFilter:;"><circle cx="12" cy="7.5" r="1.5"></circle><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"></path></svg>
                            <div class="ml-2">
                                <span class="font-bold text-base">{{ topItem }}</span>
                            </div>
                        </a>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>

<script setup>
const { data, active, lastSecond } = defineProps(['data', 'active', 'lastSecond']);
</script>

<style lang="scss" scoped>
.flex{
    .item{
        transition: all .2s ease-out;
        &:hover{
            background-color: rgba(250, 181, 103, 0.333);
        }
    }
}
</style>
