<template>
    <div id="chatPad" class="container-fluid chat">
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>
<div class="row">
    <div class="col-2-xs chat__timeAndName"><span>12:30</span> | <span>ereztdev:</span></div>
    <div class="col-10-xs chat__text"><p>This was amazing!</p></div>
</div>

    </div>
</template>

<script>
    export default {
        name: "ChatPad"
    }
</script>

<style scoped>
    #chatPad{
        background:white;
        width: 100vw;
        height: calc(34vh - 80px);
        padding: 40px 25px;
        overflow: auto;
    }
    .chat__timeAndName{
        font-weight: 900;
    }
    .chat__text{
        padding-left: 20px;
    }
</style>