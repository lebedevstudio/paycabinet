<template>
    <div class="extras">
        <div class="extras__label">
            <label>Доп. услуги</label>
        </div>

        <div class="extras__body">
            <ul class="extras__list">
                <li v-for="extra in extras">
                    <label>
                        <input class="extras__list-item" id="extras_option" type="checkbox"
                               v-bind:value="extra.cost">{{ extra.title }}
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'extras',
                'course'
            ])
        },
        methods: {
            //
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';
    @import '../assets/scss/form';

    .extras {
        background-color: #fff;
        margin-bottom: 1.5rem;

        &__label {
            @extend %label;
        }

        &__body {
            border: solid 1px $base-border-colour;
            border-radius: $base-border-radius;
            padding: 1.125rem;
        }

        &__list {
            margin: 0;
            padding: 0;
            list-style-type: none;

            li {
                label {
                    font-size: 0.9rem;
                    color: $base-text-colour;
                }
            }
        }
    }
</style>
