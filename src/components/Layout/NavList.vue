<template>
    <div class="nav-list">
        <!-- hover 時要變色, 還沒弄 -->
        <NavItem v-for="(item,index) in navContent" :key="item.title" :item="item" class="mr-2 cursor-pointer" :last="index === (navContent.length - 1)" v-model:active="currentNav"/>
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