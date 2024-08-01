<template>
    <div class="w-full h-full flex justify-center items-center my-24">
      <span class="loader"></span>
    </div>
</template>

<style lang="scss" scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #ff7800;
  border-right: 3px solid transparent;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>