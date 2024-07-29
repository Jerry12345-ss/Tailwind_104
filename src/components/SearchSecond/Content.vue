<template>
    <div class="p-5">
        <div class="flex flex-wrap border-b-2 pb-5">
            <div class="img-container col-12  rounded-md">
                <img :src="data.img" :alt="data.name" class="w-full h-full object-cover">
            </div>
            <div class="content-container col-12 lg:pl-4">
                <div v-for="(item, index) in data.list" :key="item.title">
                    <h5 class="pl-4 font-bold truncate lg:mt-0" :class="{ 'mt-3' : index === 0 }">{{ item.title }}</h5>
                    <p class="text-gray-500 text-sm pl-4 truncate py-2">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = defineProps(['data']);

</script>

<style scoped lang="scss">
.p-5{
    .flex{
        .img-container{
            // flex : 
            overflow: hidden;

            img{
                transition: all .4s ease;
                &:hover{
                    transform: scale(1.05);
                }
            }
        }

        .content-container{
            h5{
                position: relative;

                &::before{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 10px;
                    height: 10px;
                    border: 2px solid rgb(248, 119, 27);
                    border-radius: 50%;
                }
            }
        }
    }
}

@media screen and (min-width : 1024px){
    .flex{
        .img-container{
            flex : 8.33333333333 * 5%;
            max-width: 8.33333333333 * 5%;
        }

        .content-container{
            flex : 8.33333333333 * 7%;
            max-width: 8.33333333333 * 7%;
        }
    }
}
</style>