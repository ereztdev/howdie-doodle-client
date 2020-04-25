<template>
    <canvas id="myCanvas"
            @mousedown="mouseDown($event)"
            @mousemove="mouseMove($event)"
            @mouseup="mouseUp($event)"
            @mouseleave="mouseLeave($event)"
    ></canvas>
</template>

<script>
    export default {
        name: "Canvas",
        data() {
            return {
                canvas: null,
                ctx: null,
                drawing: false,
                mousePressed: false,
                x: null,
                y: null,
                lastX: null,
                lastY: null,
                lastDraw: []
            }
        },
        mounted() {
            this.initCanvas()
        },
        methods: {
            initCanvas() {
                this.canvas = document.getElementById('myCanvas');
                this.$store.commit('setCanvasCtxAndDimensions', {
                    canvasEl: this.canvas,
                    ctxEl: this.canvas.getContext("2d"),
                    canvasWidth: window.innerWidth,
                    canvasHeight: window.innerHeight * 2 / 3,
                });
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight * 2 / 3;
                this.ctx = this.canvas.getContext("2d");


            },
            mouseDown(e) {
                this.mousePressed = true;
                this.drawing = false;
                this.x = e.pageX - this.$("#myCanvas").offset().left
                this.y = e.pageY - this.$("#myCanvas").offset().top
                // this.$store.commit('updateLastVector', {reset: true})
                this.draw();
                this.$('#doodle_brushAndColor').css({pointerEvents: 'none'})
                this.$('.colorPicker--wrapper').hide()

            },
            mouseMove(e) {
                if (this.mousePressed) {
                    this.drawing = true;
                    this.x = e.pageX - this.$("#myCanvas").offset().left;
                    this.y = e.pageY - this.$("#myCanvas").offset().top;
                    this.draw();
                }
            },
            mouseUp() {
                this.mousePressed = false;
                this.$('#doodle_brushAndColor').css({pointerEvents: 'auto'})
            },
            mouseLeave(e) {

            },
            draw() {
                if (this.drawing) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = this.$store.state.canvasColor;
                    this.ctx.lineWidth = this.$store.state.brushSize;
                    this.ctx.lineJoin = 'round';
                    console.log(this.lastX, this.x, this.lastY, this.y);
                    this.ctx.moveTo(this.lastX, this.lastY);
                    this.ctx.lineTo(this.x, this.y);
                    this.$store.commit('addVectors', {
                        from: {x: this.x, y: this.y},
                        to: {x: this.lastX, y: this.lastY},
                    });
                    this.ctx.closePath();
                    this.ctx.stroke();
                    // this.$store.commit('updateLastVector', {
                    //     from: {x: this.lastX, y: this.lastY},
                    //     to: {x: this.x, y: this.y},
                    // });
                }
                this.lastX = this.x;
                this.lastY = this.y;
            },
        },
    }
</script>

<style scoped>
    #myCanvas {
        height: calc(100vh * 2 / 3);
        width: 100vw;
        display: block;
    }
</style>