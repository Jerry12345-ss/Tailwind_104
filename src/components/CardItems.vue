<template>
    <div class="item-container border rounded-lg p-5 bg-white">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.item-container{
    &:hover{
        box-shadow: 0 1px 15px 1px rgba(0, 0, 0, .18);
    }
}
</style>