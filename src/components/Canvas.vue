<template>
    <canvas id="myCanvas"
            @mousedown="mouseDown($event)"
            @mousemove="mouseMove($event)"
            @mouseup="mouseUp($event)"
            @mouseleave="mouseLeave($event)"
    ></canvas>
</template>
<script>
    import {mapState} from 'vuex';
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
            }
        },
        computed:
            mapState(
                ['allVectors']
            ),
        watch: {
            allVectors(newVal, oldVal) {
            },
        },
        created() {
            this.receiveVectors()
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
                    this.ctx.strokeStyle = this.$store.state.canvasColor === 'choose color' ? '#000000' : this.$store.state.canvasColor ;
                    this.ctx.lineWidth = this.$store.state.brushSize;
                    this.ctx.lineJoin = 'round';
                    this.ctx.moveTo(this.lastX, this.lastY);
                    this.ctx.lineTo(this.x, this.y);
                    let user = this.$store.state.user;
                    let color = this.$store.state.canvasColor === 'choose color' ? '#000000' : this.$store.state.canvasColor;
                    let brushSize = this.$store.state.brushSize;
                    let from = {x: this.x, y: this.y}
                    let to = {x: this.lastX, y: this.lastY}
                    this.$socket.emit('painting', {user, color, brushSize, from, to});
                    this.ctx.closePath();
                    this.ctx.stroke();
                }
                this.lastX = this.x;
                this.lastY = this.y;
            },
            receiveVectors() {
                this.$socket.on('painting', paintingReceived => {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = paintingReceived.color;
                    this.ctx.lineWidth = paintingReceived.brushSize;
                    this.ctx.lineJoin = 'round';
                    this.ctx.moveTo(paintingReceived.to.x, paintingReceived.to.y);
                    this.ctx.lineTo(paintingReceived.from.x, paintingReceived.from.y);
                    this.ctx.closePath();
                    this.ctx.stroke();
                });
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