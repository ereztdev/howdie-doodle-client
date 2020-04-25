<template>
    <vue-draggable-resizable id="doodle_brushAndColor"
                             class="shadow-lg"
                             :parent="true"
                             :resizable="false"
                             :h="265"
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
                <button @click="pickColor"
                        :style="`
                         background:${showColorHex}!important;
                         color:${blackOrWhite()}
                         `"
                        class="colorButton btn btn-default btn-block ripple-parent">{{showColorHex}}
                </button>

                <hr/>
                <label>Brush Size {{getBrushSize}}</label>
                <input @input="updateBrushSize($event)"
                       :value="getBrushSize"
                       type="range"
                       class="custom-range"
                >
                <button @click="clearAll()"
                        type="button"
                        class="btn btn-default btn-block ripple-parent"
                >clear all
                </button>
<!--                <button @click="undoLast()"-->
<!--                        type="button"-->
<!--                        class="my-2 btn btn-default btn-block ripple-parent"-->
<!--                >undo last-->
<!--                </button>-->
                <div class="colorPicker--wrapper shadow-lg">
                    <color-picker id="colorPicker" :value="colorChosen" @input="updateColor($event)"></color-picker>
                    <button class="my-1 colorButton btn btn-default ripple-parent btn-sm"
                            @click="closeColorPicker"
                    >close
                    </button>
                </div>
            </mdb-card-body>
        </mdb-card>
    </vue-draggable-resizable>
</template>

<script>
    import {Slider} from 'vue-color'

    import {mdbCard, mdbCardBody} from 'mdbvue';
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
                return this.$store.state.canvasColor;
            },
            getBrushSize() {
                return this.$store.state.brushSize;
            },
        },
        components: {
            mdbCard,
            mdbCardBody,
            'color-picker': Slider,

        },
        mounted() {
            this.$(".colorPicker--wrapper").hide();
        },
        methods: {
            blackOrWhite() {
                let colorNoHashThis = this.$store.state.canvasColor.substr(1);
                let colorInt = Number.parseInt(colorNoHashThis, 16);
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
            updateColor(event) {
                this.$store.commit('updateCanvasColor', { colorChosen: event.hex })
            },
            updateBrushSize(event) {
                this.$store.commit('updateBrushSize', { brushSize: event.target.value })
            },
            closeColorPicker() {
                this.$(".colorPicker--wrapper").hide();
            },
            clearAll(){
                let ctx = this.$store.state.ctxElement;
                let canvasWidth = this.$store.state.canvasWidth;
                let canvasHeight = this.$store.state.canvasHeight;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                this.$store.commit('addVectors', {reset:true});
            },
            // undoLast(){
            //     this.$store.commit('addVectors', {reset:true});
            //
            // },
        },
    }
</script>

<style lang="scss">
    .colorPicker--wrapper {
        background: white;
        position: absolute;
        top: 60px;
        left: 215px;
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