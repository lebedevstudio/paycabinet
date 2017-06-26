<template>
    <div class="discount">
        <div class="discount__label">
            <label>Промокод</label>
        </div>

        <div class="input__group input__group--discount">
            <input type="text" placeholder="Введите промокод" v-model="discount.title">
            <button class="btn btn__default" @click.prevent="assignDiscount">Применить</button>
        </div>

        <!--TODO: начато-->
        <!-- <alert>Введенный вами промокод недействителен. Попробуйте еще раз!</alert> -->
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import Alert from './Alert'

    export default {
        components: {
            Alert
        },
        computed: {
            ...mapGetters([
                'discount',
                'discounts',
                'course'
            ])
        },
        methods: {
            ...mapActions([
                'assignDiscount'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/btn';
    @import '../assets/scss/form';

    .discount {
        &__label {
            @extend %label;
        }
    }
</style>
