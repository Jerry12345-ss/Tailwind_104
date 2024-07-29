<template>
    <div class="py-5">
        <div class="flex">
            <div class="img-container col-12 mx-5">
                <img :src="data.img" :alt="data.name" class="rounded-md w-full h-full object-cover">
            </div>
            <div class="content-container col-12">
                <div v-for="item in data.list" :key="item.title">
                    <h5 class="pl-4 font-bold">{{ item.title }}</h5>
                    <p class="text-gray-500 text-sm">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data } = defineProps(['data']);

</script>

<style scoped lang="scss">
.py-5{
    .flex{
        .img-container{
            // flex : 
            overflow: hidden;

            img{
                transition: all .5s ease;
                &:hover{
                    transform: scale(1.1);
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
</style>