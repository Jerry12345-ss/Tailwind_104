<template>
    <Content :data="data.person"/>
</template>

<script setup>
import Content from './Content.vue';

const { data } = defineProps(['data']);
</script>

<style scoped lang="scss"></style>