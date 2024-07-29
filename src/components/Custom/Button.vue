<template>
    <button @click="handleClick">{{ text }}</button>
</template>

<script setup>
const { text } = defineProps(['text']);

const handleClick = () =>{
    console.log('handleClick');
}
</script>

<style scoped lang="scss">
</style>