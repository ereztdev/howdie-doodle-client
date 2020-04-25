<template>
    <div id="doodlePad">
        <doodle-pallete/>
        <doodle-canvas/>
    </div>
</template>

<script>

    import doodlePallete from './DoodlePallete'
    import doodleCanvas from './Canvas'

    export default {
        name: "DoodlePad",
        components: {
            doodlePallete,
            doodleCanvas,
        }
    }
</script>

<style scoped lang="scss">
    #doodlePad {
        background: url('/imgs/chalkboard.png');
        width: 100vw;
        height: 66vh;
    }
</style>