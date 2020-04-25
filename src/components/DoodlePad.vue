<template>
    <div id="doodlePad">
        <doodle-pallete/>
    </div>
</template>

<script>

    import doodlePallete from './DoodlePallete'

    export default {
        name: "DoodlePad",
        components: {
            doodlePallete,
        }
    }
</script>

<style scoped>
    #doodlePad {
        background: linear-gradient(45deg, #2F1C53, #A46DFF, #F6D1FD);
        width: 100vw;
        height: 66vh;
    }
</style>