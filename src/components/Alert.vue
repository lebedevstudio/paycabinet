<template>
    <div class="alert alert--danger">
        <strong>
            <slot></slot>
        </strong>

        <button class="alert__close">&times;</button>
    </div>
</template>

<script>
    export default {
        //
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';

    .alert {
        position: relative;
        border-radius: $base-border-radius;
        padding: 8px 35px 8px 14px;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-left: 3px solid transparent;
        font-size: .9rem;

        &--danger {
            background: transparent;
            border-color: #de0063;
        }

        &--success {
            background: transparent;
            border-color: darken(#00db6a, 5%);
        }

        &__close {
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            background-color: #ddd;
            color: #fff;
            font-size: .7rem;
            text-align: center;
            border: 0;
            outline: none;
            border-radius: 10px;
            cursor: pointer;
        }
    }
</style>
