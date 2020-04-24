<template>
    <div id="doodlePad">
        <mdb-btn color="primary">
            click me
        </mdb-btn>
        <a href="#">
            <div class="mask waves-effect waves-light rgba-white-slight"></div>
        </a>
    </div>
</template>

<script>
    import { mdbBtn } from 'mdbvue';

    export default {
        name: "DoodlePad",
        components:{
            mdbBtn,
        }
    }
</script>

<style scoped>
#doodlePad{
    background:linear-gradient(45deg, #2F1C53, #A46DFF, #F6D1FD);
    width: 100vw;
    height: 66vh;
}
</style>