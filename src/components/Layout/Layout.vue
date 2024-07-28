<template>
    <Sidebar/>
    <main>
        <Header/>
        <RouterView/>
        <Footer/>
    </main>
</template>

<script setup>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';
</script>

<style scoped lang="scss">
</style>
  