<template>
    <div class="card-container bg-white rounded py-4 px-7">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script setup></script>

<!-- 這邊不加 scoped -->
<style lang="scss">
.card-container{
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, .1);

    h4{
        position: relative;

        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 20%;
            // transform: translateY(-50%);
            height: 60%;
            width: 5px;
            background-color: rgb(255, 145, 0);
            border-radius: 5px;
        }
    }

    .footer-container{
        a:hover{
            span{
                color: #ff7800;
            }

            svg{
                fill : #ff7800;
            }
        }
    }
}
</style>