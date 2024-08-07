<template>
    <header class="bg-white p-4 py-0 fixed w-full" style="height: 55px; z-index: 10000">
        <div class="flex header-container items-center h-full relative">
            <div class="flex items-center lg:flex-1 h-full">
                <div class="hamburger-menu min-w-6 h-6 flex items-center cursor-pointer lg:hidden" @click="handleMenu">
                    <span class="menu-item w-full bg-gray-500 inline-block relative" :class="{ active : isMobileContent }"></span>
                </div>
                <NavList class="hidden lg:flex text-sm h-full"/>
            </div>
            <div class="logo-container min-w-32 w-32 mx-4 lg:w-40 lg:mx-0">
                <img src="../../assets/img/104_logo.png" alt="logo" class="w-full h-full">
            </div>
            <div class="mobile-function flex items-center flex-1 justify-end h-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" class="hidden lg:block fill-gray-500 hover:fill-primary cursor-pointer"><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="lg:ml-4 fill-gray-500 hover:fill-primary cursor-pointer" style="transform: ;msFilter:;"><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="ml-2 fill-gray-500 hover:fill-primary cursor-pointer lg:hidden" style="transform: ;msFilter:;"><circle cx="12" cy="7.5" r="1.5"></circle><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="ml-4 fill-gray-500 hover:fill-primary cursor-pointer hidden lg:block" style="transform: ;msFilter:;"><path d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path></svg>
                <div class="username-function hidden cursor-pointer lg:flex lh:items-center lg:ml-8">
                    <span class="text-gray-500 font-semibold text-sm">王大明</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" class="ml-1 fill-gray-500" style="transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </div>
            </div>
        </div>
        <!-- v-show="isMobileContent" -->
        <div v-show="isMobileContent" :class="{ open : isMobileContent }">
            <MobileNavList class="absolute left-0 bg-white min-h-lvh w-full lg:hidden" style="z-index: 10000;" v-model:isMobile="isMobileContent"/>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import NavList from './NavList.vue';
import MobileNavList from './MobileNavList.vue';

const isMobileContent = ref(false);

const handleMenu = () =>{
    isMobileContent.value = !isMobileContent.value;
}

// watch(isMobileContent, ()=>{
//     document.querySelector('body').style.overflowY = isMobileContent.value ? 'hidden' : 'scroll';
// });
</script>

<style scoped lang="scss">
header{
    border-bottom: 1px solid #eee;
    
    .header-container{
        .hamburger-menu{
            span{
                left: 0;
                height: 2px;

                &::after, &::before{
                    content: '';
                    width: 100%;
                    height: 2px;
                    background: #6b7280;
                    display: inline-block;
                    position: absolute;
                    transition: transform .2s 0s, top .2s .2s;
                    // left: 0;
                }

                &::before{
                    top: -7px;
                    transform: rotate(0deg);
                }

                &::after{
                    top: 7px;
                    transform: rotate(0deg);
                }

                &.active{
                    height: 0;

                    &::before{
                        top: 0;
                        transform: rotate(-45deg);
                        transition: top .2s 0s, transform .2s .2s;
                    }

                    &::after{
                        top: 0;
                        transform: rotate(45deg);
                        transition: top .2s 0s, transform .2s .2s;
                    }
                }
            } 
        }
    }
}

.username-function{
    &:hover{
        span{
            color: #ff7800;
        }

        svg{
            fill: #ff7800;
        }
    }
}
</style>

<!-- 這邊關於叉叉的部分可能會用 scss 修改 -->
  