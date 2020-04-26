<template>
    <div id="chatPad" class="chat">
        <!--<div class="chat__chats py-3">
                <ul class="chat__timeAndName">
                    <li class="chat__time">12:30</li> |
                    <li class="chat__user">ereztdev:</li>
                    <li class="chat__text" style="">This was amazing!</li>
                </ul>
        </div>-->
        <div class="chat__chats">
            <div v-for="(chatRow, index) in allChat" v-bind:key="index" class="chatRowItem--wrapper">
                <div class="chatRowItem chat__time">{{chatRow.dateTime}}</div>
                <div class="chatRowItem chat__user"><strong>{{chatRow.name}}</strong> writes: </div>
                <div class="chatRowItem chat__text">{{chatRow.text}}</div>
            </div>
        </div>
        <div class="chat__write_chat">
            <form @submit.prevent="sendText($event)">
                <mdb-input class="mb-2 px-1" outline placeholder="" ariaDescribedBy="button-addon2">
                    <mdb-btn type="submit" color="primary" size="lg" group slot="append" id="button-addon2">send
                    </mdb-btn>
                </mdb-input>
            </form>
        </div>
    </div>
</template>

<script>
    import {mdbInput, mdbBtn} from 'mdbvue';
    import moment from 'moment';

    export default {
        name: "ChatPad",
        components: {
            mdbBtn, mdbInput
        },
        created() {
            this.receiveChats();
        },
        mounted() {
        },
        computed: {
            userName() {
                return this.$store.state.user.name
            },
            time() {
                return moment().format();
            },
            allChat(){
                return this.$store.state.fullChat
            },
        },
        methods: {
            sendText(event) {
                let time = this.time;
                let name = this.userName;
                let text = event.target[0].value;
                this.$store.commit('setSingleChat', {time, name, text})
                event.target[0].value = '';
                this.$socket.emit('chat',{time, name, text});
            },
            receiveChats() {
                this.$socket.on('hello', chatReceived => {
                    console.log('data',chatReceived);
                    this.$store.commit('setSingleChat', chatReceived)
                });
            },
        },
    }
</script>

<style scoped>
    #chatPad {
        position: relative;
        background: white;
        width: 100vw;
        height: calc(34vh - 80px);
    }

    .chat__chats {
        overflow-y: auto;
        padding: 25px;
        height: calc(100% - 50px);
    }
    .chatRowItem--wrapper{
        display: flex;
        justify-content: start;
    }
    .chatRowItem {
        margin: 0 5px;
    }
    .chat__time {
        line-height: 27px;
        font-size: 12px;
        white-space: nowrap;
    }
    .chat__user {
        white-space: nowrap;
    }
    .chat__text {
        overflow-wrap: break-word;
        overflow-x: auto;
    }
    .chat__write_chat {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
</style>