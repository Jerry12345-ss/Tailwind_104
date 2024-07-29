<template>
    <section class="bg-white" data-section="first">
        <div class="container mx-auto px-3 w-full py-4 lg:py-0 flex items-center lg:h-16">
            <div class="flex-1 h-full">
                <div class="lg:ml-28 grid gap-5 gird-cols-1 sm:grid-cols-3 lg:grid-cols-6 lg:gap-14 h-full">
                    <div class="active font-bold text-gray-500 text-lg item flex items-center h-full justify-center">
                        <a href="#">
                            求職
                        </a>
                    </div>
                    <div class="font-bold text-gray-500 text-lg item flex items-center h-full justify-center">
                        <a href="#">
                            職涯
                        </a>
                    </div>
                    <div class="font-bold text-gray-500 text-lg item flex items-center h-full justify-center">
                        <a href="#">
                            學生
                        </a>
                    </div>
                    <div class="font-bold text-gray-500 text-lg item flex items-center h-full justify-center">
                        <a href="#">
                            高階
                        </a>
                    </div>
                    <div class="font-bold text-gray-500 text-lg item flex items-center h-full justify-center">
                        <a href="#">
                            中高齡
                        </a>
                    </div>
                    <div class="font-bold text-gray-500 text-lg item flex items-center h-full justify-center">
                        <a href="#">
                            Foreigners
                        </a>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block lg:ml-20">
                <div class="font-semibold text-lg text-teal-500">
                    <a href="#">
                        企業徵才
                    </a>
                </div>
            </div>
        </div>
    </section>

    <div class="container mx-auto px-4">
        <section data-section="search-content">
            <SearchContent/>
            <SearchSecondContent/>
        </section>
    </div>
</template>

<script setup>
import SearchContent from '../components/SearchContent.vue';
import SearchSecondContent from '@/components/SearchSecondContent.vue';
</script>

<style scoped lang="scss">
section[data-section="first"]{
    .flex-1{
        .item{
            a{
                &:hover{
                    color: #ff9100 !important;  
                }
            }
        }

        .item.active{
            a{
                color: #ff9100 !important;
            }
        }
    }
}
</style>
  