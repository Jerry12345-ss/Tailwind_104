<template>
    <Content :data="data.news"/>
</template>

<script setup>
import Content from './Content.vue';

const { data } = defineProps(['data']);
</script>

<style scoped lang="scss"></style>