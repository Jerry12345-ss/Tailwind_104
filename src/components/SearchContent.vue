<template>
    <div>
        <Search :isMobile="isMobile"/>

        <div class="mb-10 hidden md:block list">
            <ul class="flex">
                <li class="mr-5">
                    <a href="#" class="text-sm">無經驗可</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm">最新工作</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm">薪水4萬起</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm">熱門上市櫃</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm">新鮮人徵才</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm">NEW高薪榜</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm">AI領頭羊</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Search from '../components/Custom/Search.vue';

const isMobile = ref(false);

onMounted(()=>{
    window.addEventListener('resize', ()=>{
        if(window.innerWidth <  800){
            isMobile.value = true
        }else{
            isMobile.value = false;
        }
    })
})
</script>

<style scoped lang="scss">
.list{
    color: #7e7e7e;

    ul{
        li{
            a:hover{
                color: rgb(255, 145, 0);
            }
        }
    }
}
</style>
  