<template>
    <span class="py-2 px-3 bg-white rounded-sm font-bold text-gray-500 hover:text-primary cursor-pointer mt-4 mr-4" :class="{ active : tab.title === modelValue }" @click="handleTab">
        {{ tab.title }}
    </span>
</template>

<script setup>
// tab : { title, name }, modelValue : title
const { tab, modelValue } = defineProps(['tab', 'modelValue']);
const emit = defineEmits(['update:modelValue']);

const handleTab = () =>{
    emit('update:modelValue', tab.title);
}
</script>

<style scoped lang="scss">
@mixin tabShadow($color){
    box-shadow: 0 1px 2px 3px $color;
}

span{
    @include tabShadow(rgb(230, 230, 230)); 
    
    &:hover{
        @include tabShadow(#ffd6b2)
    }

    &.active{
        color: #ff7800;
        @include tabShadow(#ffd6b2);
    }
}
</style>