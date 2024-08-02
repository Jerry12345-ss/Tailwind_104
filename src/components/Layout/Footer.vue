<template>
    <footer class="w-full h-full text-white py-6 mt-10">
        <div class="containers mx-auto px-6 text-center">
            <div class="flex justify-center pb-2">
                <a href="#" class="text-sm hover:text-primary">常見問題</a>
                <a href="#" class="text-sm hover:text-primary">職場安全諮詢</a>
                <a href="#" class="text-sm hover:text-primary">隱私中心</a>
            </div>
            <div class="pb-1 flex flex-wrap justify-center">
                <span class="text-sm pt-2 underline underline-offset-2">本網站純屬練習為目的 並無做任何商業用途</span>
                <span class="text-sm pt-2 ml-3">＠2024 建議瀏覽器 chrome / edge</span>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped lang="scss">
footer{
    background-color: #292929;

    .flex{
        a{
            &:not(:first-child)::after{
                content: '';
                background-color: #fff;
                width: 1px;
                height: 12px;
                float: left;
                margin: 5px 15px;
            }
        }
    }
}
</style>
  