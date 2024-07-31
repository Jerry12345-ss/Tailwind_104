<template>
    <div>
        <Search :isMobile="isMobile"/>

        <div class="mb-8 hidden md:block list">
            <ul class="flex">
                <li class="mr-5">
                    <a href="#" class="text-sm hover:text-primary">無經驗可</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm hover:text-primary">最新工作</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm hover:text-primary">薪水4萬起</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm hover:text-primary">熱門上市櫃</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm hover:text-primary">新鮮人徵才</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm hover:text-primary">NEW高薪榜</a>
                </li>
                <li class="mr-5">
                    <a href="#" class="text-sm hover:text-primary">AI領頭羊</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Search from '../components/Custom/Search.vue';

const isMobile = ref(false);

// 這邊如果重新整理會無法, 也就是說在 size < 800 但沒有觸發 resize 時會無效 => 要處理
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
}
</style>
  