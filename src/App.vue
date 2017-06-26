<template>
    <div id="app">
        <div class="content">
            <selector :courses="courses"></selector>

            <extras></extras>

            <discount></discount>

            <total :course="course"></total>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Selector from './components/Selector'
    import Extras from './components/Extras'
    import Discount from './components/Discount'
    import Total from './components/Total'

    export default {
        name: 'app',
        components: {
            Selector,
            Extras,
            Discount,
            Total
        },
        computed: {
            ...mapGetters([
                'courses',
                'course'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import './assets/scss/variables';

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    body {
        height: 100%;
    }

    #app {
        font-family: 'Helvetica Neue', Helvetica, Arial,sans-serif;
        font-size: 1.125rem;
        line-height: 1.75;
        color: $base-text-colour;
    }

    .content {
        max-width: 80rem;
        margin: 0 auto;
        padding: 0 1.5rem;
    }
</style>
