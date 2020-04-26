<template>
    <div id="app">
<!--        <splash/>-->
        <navigation/>
        <router-view v-if="user"/>
    </div>
</template>
<script>
    import navigation from './components/Navigation';
    // import splash from './components/Splash'

    export default {
        components: {
            navigation,
            // splash,
        },
        computed:{
            user(){
                return this.$store.state.user.name;
            }
        },
    }

</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

    $image-path: '~@/../mdb/mdbvue/img';
    @import '~@/../mdb/mdbvue/scss/mdb-free.scss';

    @include media-breakpoint-up(xs) {
        #app {
            padding-top: 56px;

        }
    }

    @include media-breakpoint-up(sm) {
        #app {
            padding-top: 64px;

        }
    }

    @include media-breakpoint-up(md) {

    }

    @include media-breakpoint-up(lg) {
        #app {
            padding-top: 80px;

        }
    }

    @include media-breakpoint-up(xl) {
    }

</style>
