<template>
    <div class="nav-item" @mouseenter="handleEnter()" :class="{ active : active === item.title}">
        <div class="flex items-center">
            <span class="text-black">{{ item.title }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" class="fill-black" :class="{ 'hidden' : last }" style="transform: ;msFilter:;"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
        </div>
        <ul class="hidden">
            <li v-for="topItem in (item.content?.top ?? item.content)" :key="topItem">{{ topItem }}</li>
        </ul>
    </div>
</template>

<script setup>
const { item, last, active } = defineProps(['item', 'last', 'active']);
const emit = defineEmits(['update:active']);

const handleEnter = () =>{
    console.log(item.title)
    emit()
}
</script>

<style scoped lang="scss">
.nav-item{
    &.active{
        background-color: blue;
    }
}
</style>