<template>
    <div id="chatPad" class="chat">
        <div class="chat__chats py-3">
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
            <div class="row">
                <div class="chat__timeAndName">
                    <span class="chat__time">12:30</span> |
                    <span class="chat__user">ereztdev:</span>
                    <span class="chat__text" style="">This was amazing!</span>
                </div>
            </div>
        </div>
        <div class="chat__write_chat">
            <mdb-input class="mb-2 px-1" outline="default" placeholder="" ariaDescribedBy="button-addon2">
                <mdb-btn color="primary" size="lg" group slot="append" id="button-addon2">send</mdb-btn>
            </mdb-input>
        </div>
    </div>
</template>

<script>
    import {mdbInput, mdbBtn} from 'mdbvue';

    export default {
        name: "ChatPad",
        components:{
            mdbBtn,mdbInput
        },
    }
</script>

<style scoped>
    #chatPad{
        position: relative;
        background:white;
        width: 100vw;
        height: calc(34vh - 80px);
    }
    .chat__time{
        font-weight: 900;
    }
    .chat__user{
        font-weight: 900;
    }
    .chat__chats{
        overflow-y: auto;
        padding: 25px;
        height: calc(100% - 50px);
    }
    .chat__text{
        padding-left: 10px;
    }
    .chat__write_chat{
        position: absolute;
        width: 100%;
        bottom: 0;
    }
</style>