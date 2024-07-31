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

    <div class="containers mx-auto px-6 mb-6">
        <section data-section="search-content">
            <SearchContent/>
            <SearchSecondContent/>
        </section>
    </div>

    <div class="containers mx-auto px-6 mb-6">
        <section data-section="properJob-content">
            <Card title="適合你的好工作"/>
        </section>
    </div>

    <div class="containers mx-auto px-6 mb-6">
        <section data-section="featured-content">
            <Card title="精選企業"/>
        </section>
    </div>

    <div class="containers mx-auto px-6 mb-6">
        <section data-section="properCompany-content">
            <Card title="適合你的好公司"/>
        </section>
    </div>

    <div class="containers mx-auto px-6 mb-6">
        <section data-section="popularEnterprise-content">
            <Card title="熱門企業"/>
        </section>
    </div>
</template>

<script setup>
import SearchContent from '../components/SearchContent.vue';
import SearchSecondContent from '@/components/SearchSecondContent.vue';
import Card from '@/components/Custom/Card.vue';
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
</style>
  