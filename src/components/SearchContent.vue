<template>
    <div class="h-48">
        <Search/>

        <div class="mb-10 hidden md:block">
            <ul class="flex">
                <li class="mr-5">
                    <a href="#">無經驗可</a>
                </li>
                <li class="mr-5">
                    <a href="#">最新工作</a>
                </li>
                <li class="mr-5">
                    <a href="#">薪水4萬起</a>
                </li>
                <li class="mr-5">
                    <a href="#">熱門上市櫃</a>
                </li>
                <li class="mr-5">
                    <a href="#">新鮮人徵才</a>
                </li>
                <li class="mr-5">
                    <a href="#">NEW高薪榜</a>
                </li>
                <li class="mr-5">
                    <a href="#">AI領頭羊</a>
                </li>
            </ul>
        </div>

        <div>
            <div class="left-card bg-white"></div>
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
    </div>
</template>

<script setup>
import Search from '../components/Custom/Search.vue'
</script>

<style scoped lang="scss">
</style>
  