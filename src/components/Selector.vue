<template>
    <div class="selector">
        <div class="selector__label">
            <label>Выбор курса</label>
        </div>

        <div class="input__group">
            <select type="select" v-model="current.id" @change="selectCourseById(current)">
                <option v-for="course in courses" v-bind:value="course.id">{{ course.title }} {{ course.cost }} руб.
                </option>
            </select>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        props: [
            'courses'
        ],
        methods: {
            ...mapActions([
                'selectCourseById'
            ])
        },
        computed: {
            ...mapGetters([
                'current',
                'course'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables';
    @import '../assets/scss/form';

    .selector {
        &__label {
            @extend %label;
        }
    }
</style>
