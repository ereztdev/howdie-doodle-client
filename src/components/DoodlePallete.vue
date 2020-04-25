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
                class="my-0 p-3 card-header-title bg-primary text-capitalize text-white-50 text-center doodle_brushAndColor_title"
            >brush & color
            </h3>
            <mdb-card-body class="text-center" cascade>
                <mdb-btn block class="colorButton"
                         @click="pickColor"
                         :style="`
                         background:${colorChosen}!important;
                         color:${blackOrWhite()}
                         `">
                    {{showColorHex}}
                </mdb-btn>
                <hr/>
                <label>Brush Size {{brushSize}}</label>
                <input v-model="brushSize" type="range" class="custom-range" id="customRange1">
                <div class="colorPicker--wrapper">
                    <color-picker id="colorPicker" :value="colorChosen" @input="updateValue($event)"></color-picker>
                    <mdb-btn @click="closeColorPicker" size="sm">close</mdb-btn>
                </div>
            </mdb-card-body>
        </mdb-card>
    </vue-draggable-resizable>
</template>

<script>
    import {Slider} from 'vue-color'

    import {mdbCard, mdbCardBody, mdbBtn} from 'mdbvue';
    // import $ from 'jquery';
    export default {
        name: "DoodlePallete",
        data() {
            return {
                brushSize: 20,
                colorChosen: '',
                colorInt: null,

            }
        },
        computed: {
            showColorHex() {
                if (this.colorChosen) {
                    return this.colorChosen.substr(1)
                } else
                    return `Choose Color`
            },
        },
        components: {
            mdbCard,
            mdbCardBody,
            mdbBtn,
            'color-picker': Slider,

        },
        mounted() {
            // this.$(document).on('click', function (event) {
            // console.log(event.target);
            // })
            this.$(".colorPicker--wrapper").hide();

        },
        methods: {
            blackOrWhite() {
                let colorNoHashThis = this.colorChosen.substr(1);
                let colorInt = Number.parseInt(colorNoHashThis, 16);
                console.log(colorInt);
                this.colorInt = isNaN(colorInt) ? null : colorInt
                return colorInt > 10000000 ? `black` : `white`;
            },
            grabberDown(event) {
                this.$(event.target).css({cursor: 'grabbing'})
            },
            grabberUp(event) {
                this.$(event.target).css({cursor: 'grab'})
            },
            pickColor() {
                this.$(".colorPicker--wrapper").show();
            },
            updateValue(event) {
                this.colorChosen = event.hex;
            },
            closeColorPicker() {
                this.$(".colorPicker--wrapper").hide();
            },
        },
    }
</script>

<style lang="scss">
    .colorPicker--wrapper {
        background: white;
        position: absolute;
        top: 60px;
        left: 205px;
    }

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