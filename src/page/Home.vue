<template>
    <section class="bg-white" data-section="first">
        <div class="container mx-auto px-6 w-full py-4 lg:py-0 flex items-center lg:h-16 justify-center">
            <div class="lg:ml-28 h-full grid sm:gap-7 lg:gap-14 sm:grid-rows-3 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:flex lg:flex-1 lg:justify-center">
                <div class="active font-bold text-gray-500 text-lg item h-full flex items-center mb-4 md:mb-0 justify-center">
                    <a href="#" class="hover:text-primary">
                        求職
                    </a>
                </div>
                <div class="font-bold text-gray-500 text-lg item h-full flex items-center mb-4 md:mb-0 justify-center">
                    <a href="#" class="hover:text-primary">
                        職涯
                    </a>
                </div>
                <div class="font-bold text-gray-500 text-lg item h-full flex items-center mb-4 md:mb-0 justify-center">
                    <a href="#" class="hover:text-primary">
                        學生
                    </a>
                </div>
                <div class="font-bold text-gray-500 text-lg item h-full flex items-center mb-4 md:mb-0 justify-center">
                    <a href="#" class="hover:text-primary">
                        高階
                    </a>
                </div>
                <div class="font-bold text-gray-500 text-lg item h-full flex items-center mb-4 md:mb-0 justify-center">
                    <a href="#" class="hover:text-primary">
                        中高齡
                    </a>
                </div>
                <div class="font-bold text-gray-500 text-lg item h-full flex items-center mb-4 md:mb-0 justify-center">
                    <a href="#" class="hover:text-primary">
                        Foreigners
                    </a>
                </div>
            </div>
            <div class="hidden lg:block lg:ml-8">
                <div class="font-semibold text-lg text-teal-500">
                    <a href="#">
                        企業徵才
                    </a>
                </div>
            </div>
        </div>
    </section>

    <div class="containers mx-auto px-6 mb-6 search-content py-3 lg:py-0">
        <section data-section="search-content">
            <SearchContent/>
            <SearchSecondContent/>
        </section>
    </div>

    <div class="containers mx-auto px-6 mb-6">
        <section data-section="properJob-content containers_card">
            <Card title="適合你的好工作" :tabs="tabData.properJob">
                <template #header>
                    <h4 class="font-bold text-xl pl-4 mb-2">適合你的好工作</h4>
                </template>
                <template #default>
                    <div class="flex mb-7 flex-wrap justify-start">
                        <Tab v-for="item in tabData.properJob.tab" :key="item.name" :tab="item" v-model="activeProperJob"/>
                    </div>
                    <template v-if="properJobStatus.loading">
                        <Loading/>
                    </template>
                    <template v-else-if="properJobStatus.error">
                        <h2>錯誤!!</h2>
                    </template>
                    <template v-else>
                        <CardList :data="properJobStatus.data" cardTitle="適合你的好工作" class="grid gap-4 grid-rows-1 grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 1xl:grid-rows-2 1xl:grid-cols-4"/> 
                    </template>
                </template>
                <template #footer>
                    <div class="pt-7 pb-1 flex justify-center footer-container">
                        <a href="#" class="flex items-center">
                            <span class="text-gray-500 font-bold text-sm">看更多工作</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-gray-500" style="transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                        </a>
                    </div>
                </template>
            </Card>
        </section>
    </div>

    <div class="containers mx-auto px-6 mb-6">
        <section data-section="featured-content containers_card">
            <Card title="精選企業">
                <template #header>
                    <h4 class="font-bold text-xl pl-4 mb-2">精選企業</h4>
                </template>
                <template #default>
                    <!-- <CardList :data="dataStatus.data" cardTitle="精選企業" class="grid gap-4 grid-rows-1 grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 1xl:grid-rows-2 1xl:grid-cols-4"/> -->
                </template>
                <template #footer></template>
            </Card>
        </section>
    </div>

    <div class="containers mx-auto px-6 mb-6">
        <section data-section="properCompany-content containers_card">
            <Card title="適合你的好公司" :tabs="tabData.properCompany">
                <template #header>
                    <h4 class="font-bold text-xl pl-4 mb-2">適合你的好公司</h4>
                </template>
                <template #default>
                    <div class="flex mb-7 flex-wrap justify-start">
                        <Tab v-for="item in tabData.properCompany.tab" :key="item.name" :tab="item" v-model="activePorperCompany"/>
                    </div>
                    <template v-if="properCompanyStatus.loading">
                        <Loading/>
                    </template>
                    <template v-else-if="properCompanyStatus.error">
                        <h2>錯誤!!</h2>
                    </template>
                    <template v-else>
                        <CardList :data="properCompanyStatus.data" cardTitle="適合你的好公司" class="grid gap-4 grid-rows-1 grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 1xl:grid-rows-2 1xl:grid-cols-4"/>
                    </template>
                </template>
                <template #footer>
                    <div class="pt-7 pb-1 flex justify-center footer-container">
                        <a href="#" class="flex items-center">
                            <span class="text-gray-500 font-bold text-sm">看更多公司</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-gray-500" style="transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                        </a>
                    </div>
                </template>
            </Card>
        </section>
    </div>

    <div class="containers mx-auto px-6 mb-6">
        <section data-section="popularEnterprise-content containers_card">
            <Card title="熱門企業">
                <template #header>
                    <h4 class="font-bold text-xl pl-4 mb-2">熱門企業</h4>
                </template>
                <template #default>
                    <!-- <CardList :data="dataStatus.data" cardTitle="熱門企業" class="grid gap-4 grid-rows-1 grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 1xl:grid-rows-2 1xl:grid-cols-4"/> -->
                </template>
                <template #footer></template>
            </Card>
        </section>
    </div>
</template>

<script setup>
import SearchContent from '../components/SearchContent.vue';
import SearchSecondContent from '@/components/SearchSecondContent.vue';
import Card from '@/components/Custom/Card.vue';
import tabData from '../data/TabData';
import { onMounted, reactive, watch, ref } from 'vue';
import axios from 'axios';
import CardList from '@/components/CardList.vue';
import Tab from '@/components/Custom/Tab.vue';
import Loading from '@/components/Custom/Loading.vue';

const properJobStatus = reactive({
    data : null,
    loading : false,
    error : null,
}); 

const properCompanyStatus = reactive({
    data : null,
    loading : false,
    error : null
});

const activeProperJob = ref('為你推薦');
const activePorperCompany = ref('為你推薦');

onMounted(async()=>{
    properJobStatus.loading = true;
    properCompanyStatus.loading = true;

    console.log('dsfs')

    const fetcchProperJob = await axios.get('https://json-server-vercel-jetest.vercel.app/company');
    const fetchProperCompany = await axios.get('https://json-server-vercel-jetest.vercel.app/company');

    Promise.allSettled([fetcchProperJob, fetchProperCompany])
    .then(result =>{
        properJobStatus.data = result[0].value.data;
        properCompanyStatus.data = result[1].value.data; 
    }).catch(()=>{
        properJobStatus.error = '錯誤發生!';
        properCompanyStatus.error = '錯誤發生!';
    }).finally(()=>{
        properJobStatus.loading = false;
        properCompanyStatus.loading = false;
    })
});

watch(activeProperJob, async()=>{
    properJobStatus.loading = true; 

    // const tabQuery = tabData.properJob.tab.find(item => item.title = activeProperJob.value);

    try{
        const result = await axios.get(`https://json-server-vercel-jetest.vercel.app/company`);
        properJobStatus.data = result.data;
    }catch(error){
        console.error(error);
        properJobStatus.error = '錯誤發生!';
    }finally{
        properJobStatus.loading = false;
    }
});

watch(activePorperCompany, async()=>{
    properCompanyStatus.loading = true;

    // const tabQuery = tabData.properCompany.tab.find(item => item.title = activePorperCompany.value);

    try{
        const result = await axios.get(`https://json-server-vercel-jetest.vercel.app/company`);
        properCompanyStatus.data = result.data;
    }catch(error){
        console.error(error);
        properCompanyStatus.error = '錯誤發生!';
    }finally{
        properCompanyStatus.loading = false;
    } 
});
</script>

<style scoped lang="scss">
section[data-section="first"]{
    .grid{
        .item.active{
            a{
                color: #ff8700 !important;
            }
        }
    }
}

.containers.search-content{
    background-color: #ffeedf;
}
</style>
  