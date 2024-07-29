<template>
    <div class="flex">
        <div class="left-card bg-white border rounded-md border-orange-300">
            <div style="background-color: rgba(255,238,223,.6);" class="tabBtn-container">
                <button 
                    v-for="(tab, index) in tabs" 
                    :key="tab.name" 
                    class="tab-btn font-bold text-gray-500 px-7 py-4"
                    :class="{ active : tab.name === currentTab, 'rounded-l-md' : index === 0 }"
                    @click="()=>{ currentTab = tab.name }">
                    {{ tab.name }}
                </button>
            </div>
            <div class="tabContent-container">
                <component :is="computTab" :data="searchSecondContent"></component>
            </div>
        </div>
        <div class="right-card bg-white rounded-md">
            <div class="card-name"></div>
            <div class="card-storedJob">
                <span class="text-slate-500 font-bold">近期儲存未應徵更多</span>
                <div class="job">
                    <div class="jobTitle">
                        <h5>前端網頁開發工程師(財富管理事業群)</h5>
                    </div>
                    <div class="jobTitle">
                        <h5>前端網頁開發工程師(財富管理事業群)</h5>
                    </div>
                    <div class="jobTitle">
                        <h5>前端網頁開發工程師(財富管理事業群)</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import New from './SearchSecond/New.vue';
import Person from './SearchSecond/Person.vue';
import Student from './SearchSecond/Student.vue';
import Old from './SearchSecond/Old.vue';
import searchSecondContent from  '../data/SearchSecond';

// 這邊會這樣拆是因爲想寫看看 dynamic component 
const currentTab = ref('工作快訊');
const tabs = [
    {
        name : '工作快訊',
        component : New
    },
    {
        name : '新鮮人情報',
        component : Person
    },
    {
        name : '學生話題',
        component : Student
    },
    {
        name : '中高齡工作',
        component : Old
    }
]

const computTab = computed(()=>{
    const result = tabs.find(item => item.name === currentTab.value);
    return result.component;
});
</script>

<style scoped lang="scss">
.left-card{
    button{
        &:hover{
            color: #ff9100;
        } 
    }

    button.active{
        background-color: #fff;
        color: #ff9100;
    }
}
</style>