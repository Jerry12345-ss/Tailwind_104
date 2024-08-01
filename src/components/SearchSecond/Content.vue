<template>
    <div class="p-5 pb-0 2xl:px-8 2xl:pb-0">
        <div class="flex flex-wrap border-b-2 pb-5">
            <div class="img-container w-full basis-full rounded-md lg:w-5/12 lg:basis-5/12">
                <img :src="data.img" :alt="data.name" class="w-full h-full object-cover">
            </div>
            <div class="content-container w-full basis-full lg:pl-4 lg:w-7/12 lg:basis-7/12">
                <div v-for="(item, index) in data.list" :key="item.title">
                    <h5 class="pl-4 font-bold whitespace-normal lg:truncate lg:mt-0 hover:text-primary cursor-pointer" :class="{ 'mt-3' : index === 0 }">{{ item.title }}</h5>
                    <p class="text-gray-500 text-sm pl-4 whitespace-normal lg:truncate py-2">{{ item.text }}</p>
                </div>
            </div>
        </div>
        <div class="flex footer-container flex-wrap">
            <div v-for="item in data.footer" :key="item.title" class="footer-item w-full basis-full py-4">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style="fill: rgb(255, 145, 0);transform: ;msFilter:;"><circle cx="12" cy="7.5" r="1.5"></circle><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"></path></svg>
                    <div class="ml-2">
                        <h5 class="font-bold hover:text-primary cursor-pointer">{{ item.title }}</h5>
                        <p class="text-gray-500 text-sm">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = defineProps(['data']);

</script>

<style scoped lang="scss">
@import '../../style/flex.scss';

.p-5{
    .flex{
        .img-container{
            overflow: hidden;

            img{
                transition: all .5s ease-in-out;
                &:hover{
                    transform: scale(1.1);
                }
            }
        }

        .content-container{
            h5{
                position: relative;

                &::before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 10px;
                    height: 10px;
                    border: 2px solid rgb(248, 119, 27);
                    border-radius: 50%;
                }
            }
        }
    }
}

@media screen and (min-width : 420px){
    .footer-container{
        .footer-item{
            @include flex_setting(6);
        }
    }
}

@media screen and (min-width : 750px){
    .footer-container{
        .footer-item{
            @include flex_setting(3);
        }
    }
}

@media screen and (min-width : 1280px){
    img{
        max-height: 180px;
    }
}
</style>