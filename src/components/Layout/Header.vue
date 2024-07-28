<template>
    <header class="bg-white p-4">
        <div class="flex header-container">
            <div class="">
                <div class="flex">
                    <div>工作</div>
                    <div>公司</div>
                    <div>工具</div>
                    <div>職涯</div>
                    <div>APP</div>
                    <div>所有服務</div>
                </div>
            </div>
            <div class="logo-container">
                <img src="../../assets/img/104_logo.png" alt="logo">
            </div>
            <div class=""></div>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped lang="scss">
header{
    border-bottom: 1px solid #eee;
    
    .header-container{
        .logo-container{
            margin: 0 40px;
            max-width: 240px;

            img{
                width: 100%;
            }
        }
    }
}
</style>
  