<template>
    <Content :data="data.old"/>
</template>

<script setup>
import Content from './Content.vue';

const { data } = defineProps(['data']);
</script>

<style scoped lang="scss"></style>