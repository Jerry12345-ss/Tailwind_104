<template>
    <div>
        <CardItems v-for="item in data" :key="item.id" :item="item" />
    </div>
</template>

<script setup>
import CardItems from './CardItems.vue';

const { data } = defineProps(['data']);
</script>

<style scoped lang="scss"></style>