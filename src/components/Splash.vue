<template>
    <div id="splash">
        <form @submit.prevent="inputUserName($event)">
            <div class="text-center siftach">
                <h1>welcome to <span class="brandName">Howdie DooDle</span></h1>
                <h5>What name would you prefer to use here?</h5>
                <div class="userInput">
                    <mdb-input class="mt-5 userInput text-danger" placeholder=""
                               ariaDescribedBy="button-addon2">
                        <mdb-btn type="submit" color="primary" size="md" group slot="append" id="button-addon2">Let's
                            go
                        </mdb-btn>
                    </mdb-input>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {mdbInput, mdbBtn} from 'mdbvue';

    export default {
        name: "Splash",
        components: {
            mdbBtn, mdbInput
        },
        mounted() {
            this.$('.userInput input').focus()
        },
        computed: {
            userIsSet() {
                return this.$store.state.user.id && this.$store.state.user.name
            }
        },
        watch:{
            userIsSet(newVal,oldVal){
                //console.log("watcher",newVal,oldVal);
                newVal ? this.$('#splash').hide() : false;
            }
        },
        methods: {
            inputUserName(event) {
                let name = event.target[0].value
                let id = this.create_UUID();
                this.$store.commit('setUserName', {user: {name, id}})
            },
            create_UUID() {
                var dt = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (dt + Math.random() * 16) % 16 | 0;
                    dt = Math.floor(dt / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            }
        }
    }
</script>

<style lang="scss">
    #splash {
        background: #00b0ff;
        position: fixed;
        width: 100vw;
        height: 100%;
        z-index: 3;
        font-family: Roboto, sans-serif;
        color: whitesmoke;
    }

    .brandName {
        font-family: SFFedoraRegular, sans-serif;
        /*font-size: 30px;*/
    }

    .siftach {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .userInput {
        font-family: SFFedoraRegular, sans-serif;
        background: #00bfa5;
        input{
            font-size: 30px;
        }
        button {
            font-size: 18px;
        }
    }
</style>