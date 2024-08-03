<template>
    <div>
        <template v-if="cardTitle === '適合你的好工作'">
            <CardItems v-for="item in data" :key="item.id">
                <template #default>
                    <div class="flex flex-col">
                        <div class="py-1">
                            <span class="text-link font-bold pb-2 hover:text-link_hover cursor-pointer">{{ item.job[0].name }}</span>
                        </div>
                        <div class="py-1">
                            <span class="text-link font-bold pb-2 hover:text-link_hover cursor-pointer">{{item.name}}</span>
                        </div>
                        <div class="flex flex-wrap py-1 item-data">
                            <span class="font-bold text-sm">{{ item.address }}</span>
                            <span class="font-bold text-sm">{{ item.year }}</span>
                            <span class="font-bold text-sm">{{ item.education }}</span>
                        </div>
                        <div class="flex py-1 justify-between font-bold text-sm">
                            <div class="text-primary">{{ item.money }}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer fill-gray-500 hover:fill-secondary"  width="22" height="22" viewBox="0 0 24 24" style="transform: ;msFilter:;"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
                        </div>
                    </div>
                </template>
            </CardItems>
        </template>
        <template v-else-if="cardTitle === '適合你的好公司'">
            <CardItems v-for="item in data" :key="item.id">
                <template #default>
                    <div class="flex flex-col">
                        <div class="flex items-center">
                            <div class="border rounded p-2 w-14 h-14">
                                <img src="../assets/logo.svg" alt="logo" class="w-full h-full">
                            </div>
                            <span class="ml-4 text-link font-bold hover:text-link_hover cursor-pointer">{{ item.name }}</span>
                        </div>
                        <div class="flex pt-5 items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-4 h-4 fill-gray-400"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                            <span class="pl-2">{{ item.address }}</span>
                        </div>
                        <div class="flex pt-1 items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-4 h-4 fill-gray-400"><path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/></svg>
                            <span class="pl-2">{{ item.category }}</span>
                        </div>
                        <div class="flex flex-wrap">
                            <span v-for="job in item.job" :key="job.id" class="py-2 px-2 bg-white rounded-md font-bold text-gray-500 border border-gray-200 mt-2 mr-2 text-sm hover:text-primary cursor-pointer hover:border-primary">{{ job.name }}</span>
                        </div>
                        <div class="pt-5 text-center">
                            <span class="text-primary cursor-pointer font-semibold">查看工作機會(15)</span>
                        </div>
                    </div>
                </template>
            </CardItems>
        </template>
    </div>
</template>

<script setup>
import CardItems from './CardItems.vue';

const { data, cardTitle } = defineProps(['data', 'cardTitle']);
</script>

<style scoped lang="scss">
.item-data{
    span{
        display: inline-block;
        
        &:not(:first-child)::before{
            content: '';
            width: 1px;
            height: 12px;
            background-color: #cdcdcd;
            margin: 5px;
            float: left;
        }
    }
}
</style>