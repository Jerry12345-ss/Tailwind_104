<template>
    <div class="item-container border rounded-md p-4 bg-white">{{ item.name }}</div>
</template>

<script setup>
const { item } = defineProps(['item']);
</script>

<style scoped lang="scss">
.item-container{
    &:hover{
        box-shadow: 0 1px 15px 1px rgba(0, 0, 0, .18);
    }
}
</style>