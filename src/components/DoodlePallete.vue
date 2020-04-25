<template>
    <vue-draggable-resizable id="doodle_brushAndColor"
                             :parent="true"
                             :resizable="false"
                             drag-handle=".card-header-title"
                             class-name-resizing="my-resizing-class"
                             class-name-active="my-active-class">
        <mdb-card cascade>

            <h3 @mouseover="grabberUp($event)"
                @mouseup="grabberUp($event)"
                @mousedown="grabberDown($event)"
                class="my-0 p-3 card-header-title bg-primary text-capitalize text-center doodle_brushAndColor_title"
            >brush & color
            </h3>
            <mdb-card-body class="text-center" cascade>
                <p>Brush Size {{brushSize}}</p>
                <input v-model="brushSize" type="range" class="custom-range" id="customRange1">
                <p>color: {{colorChosen ? colorChosen : "#ff0000" }}</p>
                <input class="form-control align-content-center w-100"  v-model="colorChosen" type="color" id="favcolor" name="favcolor" value="#ff0000"><br><br>
            </mdb-card-body>
        </mdb-card>
    </vue-draggable-resizable>
</template>

<script>
    import {mdbCard, mdbCardBody} from 'mdbvue';
    // import $ from 'jquery';
    export default {
        name: "DoodlePallete",
        data() {
            return {
                brushSize:20,
                colorChosen:null,
            }
        },
        components: {
            mdbCard,
            mdbCardBody,
        },
        mounted() {
            this.$(document).on('click', function (event) {
            console.log(event.target);
            })
        },
        methods: {
            grabberDown(event) {
                this.$(event.target).css({cursor: 'grabbing'})
            },
            grabberUp(event) {
                this.$(event.target).css({cursor: 'grab'})
            },
        },
    }
</script>

<style lang="scss">

    .box {
        width: 500px;
        height: 500px;
        background: red;
    }

    .my-resizing-class {
        border: none;
    }

    .my-active-class {
        /*background: red;*/
        border: none;

    }

    .vdr {
        border: none !important;
    }

    .doodle_brushAndColor {

    }
</style>