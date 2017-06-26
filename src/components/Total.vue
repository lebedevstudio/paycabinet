<template>
    <div class="total">
        <h2>Курс: {{ course.title }}</h2>
        <h4>Итоговая цена: {{ total.cost }} руб.</h4>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        props: [
            'course'
        ],
        computed: {
            ...mapGetters([
                'total'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';

    .total {
        background-color: #fff;
        border: solid 1px $base-border-colour;
        border-radius: $base-border-radius;

        margin-top: 1.5rem;
        padding: 1.125rem;
    }
</style>
