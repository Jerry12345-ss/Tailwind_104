<template>
    <!-- loading 有空處理 -->
    <div class="card-container bg-white rounded p-4">
        <h4 class="font-bold text-xl pl-4 mb-4">{{ title }}</h4>

        <!-- Tab (emit event call API)-->
        <CardList :data="dataStatus.data" class="grid gap-4 grid-rows-1 grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4"/> 
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import CardList from '../CardList.vue';
import axios from 'axios';

const { title } = defineProps(['title']);

const dataStatus = reactive({
    data : null,
    loading : false,
    error : null
}); 

onMounted(async()=>{
    dataStatus.loading = true;
    
    try{
        const { data } = await axios.get('https://json-server-vercel-jetest.vercel.app/company');
        dataStatus.data = data;
    }catch(error){
        console.error(error);
    }finally{
        dataStatus.loading = false;
    }
})
</script>

<style scoped lang="scss">
.card-container{
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, .1);

    h4{
        position: relative;

        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 20%;
            // transform: translateY(-50%);
            height: 60%;
            width: 5px;
            background-color: rgb(255, 145, 0);
            border-radius: 5px;
        }
    }
}
</style>