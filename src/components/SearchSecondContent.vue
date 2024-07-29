<template>
    <div class="flex flex-wrap">
        <div class="left-card bg-white border rounded-md border-orange-300 col-12 mb-8 lg:mb-0">
            <div style="background-color: rgba(255,238,223,.6);" class="tabBtn-container">
                <!-- 在版面低於 1024 時要處理 -->
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
        <div class="right-card pl-5">
            <div class="bg-white rounded-md">
                <div class="card-name p-4">
                    <!--  -->
                </div>
                <div class="card-storedJob p-4">
                    <div class="flex justify-between">
                        <span class="text-slate-500 font-bold">近期儲存未應徵更多</span>
                        <a href="#">更多</a>
                    </div>
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

.right-card{
    width: 324px;
}

@media screen and (min-width: 1024px){
    .flex{
        .left-card{
            flex: 1;
        }
    }
}
</style>