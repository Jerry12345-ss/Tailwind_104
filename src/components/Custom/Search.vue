<template>
    <div class="mt-8 flex items-center mb-3">
        <template v-if="!props.isMobile">
            <div class="w-10/12 basis-10/12 flex bg-white border rounded-md input-container">
                <div class="search-input w-4/12 basis-4/12">
                    <input type="text" class="border-none py-3 px-3 outline-none rounded-l-md w-full" placeholder="關鍵字"/>
                </div>
                <div class="region-btn w-4/12 basis-4/12">
                    <button class="flex w-full h-full items-center px-3">
                        <span class="font-bold" style="color: #a9a9a9;">地區</span>
                    </button>
                </div>
                <div class="job-btn w-4/12 basis-4/12">
                    <button class="flex w-full h-full items-center px-3">
                        <span class="font-bold" style="color: #a9a9a9;">職務類別</span>
                    </button>
                </div>
            </div>
            <div class="w-2/12 basis-2/12 pl-6">
                <!-- hover 處理 -->
                <Button text="搜尋" :style="style"></Button>
            </div>
        </template>
        <template v-else>
            <div class="w-full basis-full flex bg-white border rounded-md input-container">
                <div class="search-input col-4">
                    <input type="text" class="border-none py-3 px-3 outline-none rounded-l-md w-full" placeholder="關鍵字"/>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from './Button.vue';

const props = defineProps(['isMobile']);

const style = reactive({
    backgroundColor : '#ff9100',
    color : '#fff',
    // minWidth : '120px',
    padding : '0.75rem 20px',
    width : '100%',
    borderRadius : '4px',
    fontWeight : 'bold'
});
</script>

<style scoped lang="scss">
.input-container{
    border-color: #ff9100;

    input::placeholder{
        color: #a9a9a9;
        font-weight: bold;
    }

    .region-btn, .job-btn{
        position: relative;

        &::before{
            content: '';
            position: absolute;
            left: 0;
            top : 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 25%;
            background-color: #a9a9a9;
        }
    }
}
</style>
  