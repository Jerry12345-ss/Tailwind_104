<template>
    <div class="flex flex-col lg:flex-row">
        <div class="left-card bg-white border rounded-xl border-orange-300 mb-8 lg:mb-0 flex-1">
            <div style="background-color: rgba(255,238,223,.6);" class="tabBtn-container flex rounded-t-xl">
                <div class="flex-1 flex lg:block">
                    <button 
                        v-for="(tab, index) in tabs" 
                        :key="tab.name" 
                        class="tab-btn font-bold text-gray-500 px-7 py-3 hover:text-primary"
                        :class="{ active : tab.name === currentTab, 'rounded-l-xl' : index === 0, 'rounded-r-xl lg:rounded-r-none' : index === tabs.length-1 }"
                        @click="()=>{ currentTab = tab.name }">
                        {{ tab.name }}
                    </button>
                </div>
            </div>
            <div class="tabContent-container">
                <component :is="computTab" :data="searchSecondContent"></component>
            </div>
        </div>
        <div class="right-card lg:pl-5 w-full lg:w-[324px]">
            <div class="bg-white rounded-xl h-full">
                <div class="card-name p-4 flex justify-between items-center" style="border-bottom: 1px solid #e5e7eb;">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style="fill: rgb(255, 145, 0);transform: ;msFilter:;"><circle cx="12" cy="7.5" r="1.5"></circle><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M16.5 10.5 16 9l-3 1h-2L8 9l-.5 1.5 3 1V13L9 17.25l1.5.75 1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5l3-1z"></path></svg>
                        <span class="font-bold ml-1">王小明</span>
                    </div>
                    <a href="#" class="font-bold text-link hover:text-link_hover">
                        前往履歷表
                    </a>
                </div>
                <div class="card-storedJob p-4">
                    <div class="flex justify-between mb-2">
                        <span class="text-slate-500 font-bold">近期儲存未應徵</span>
                        <a href="#" class="text-slate-500 font-bold hover:text-primary">更多</a>
                    </div>
                    <div class="job">
                        <div class="jobContent py-3">
                            <a href="#">
                                <h5 class="font-bold text-link hover:text-link_hover">前端工程師</h5>
                            </a>
                            <a href="#">
                                <span class="text-sm text-gray-500 hover:text-primary">圖靈數位股份有限公司</span>
                            </a>
                        </div>
                        <div class="jobContent py-3">
                            <a href="#">
                                <h5 class="font-bold text-link hover:text-link_hover">前端工程師</h5>
                            </a>
                            <a href="#">
                                <span class="text-sm text-gray-500 hover:text-primary">昇晉整合服務有限公司</span>
                            </a>
                        </div>
                        <div class="jobContent py-3 pb-0">
                            <a href="#">
                                <h5 class="font-bold text-link hover:text-link_hover">初級前端工程師 (Vue)</h5>
                            </a>
                            <a href="#">
                                <span class="text-sm text-gray-500 hover:text-primary">趣味金融科技股份有限公司</span>
                            </a>
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
@import '../style/flex.scss';

.left-card{
    .tabBtn-container{
        button{
            @include flex_setting(3); 
            padding-left: 1vw;
            padding-right: 1vw;
            font-size: 13px;
        }

        button.active{
            background-color: #fff;
            color: #ff8700;
        }
    }
}

.right-card{    
    .card-name{
        a{
            transition: all .1s ease-out;
        }
    }
}

@media screen and (min-width: 640px){
    .left-card{
        .tabBtn-container{
            button{
                padding-left: 1.75rem;
                padding-right: 1.75rem;
                font-size: 16px;
            }
        } 
    }
}

// @media screen and (min-width: 1024px){
//     .flex{
//         .left-card{
//             flex: 1;
//         }
//     }
// }
</style>