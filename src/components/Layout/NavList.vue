<template>
    <div class="nav-list items-center relative">
        <NavItem v-for="(item, index) in navContent" :key="item.title" :item="item" class="mr-2 cursor-pointer" v-model:active="currentNav" :lastSecond="index === (navContent.length -2)"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavItem from './NavItem.vue';
import navContent from '../../data/nav';

const currentNav = ref(null);
</script>

<style scoped lang="scss">
</style>