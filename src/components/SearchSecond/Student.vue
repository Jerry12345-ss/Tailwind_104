<template>
    <Content :data="data.student"/>
</template>

<script setup>
import Content from './Content.vue';

const { data } = defineProps(['data']);
</script>

<style scoped lang="scss"></style>