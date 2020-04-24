<template>
  <div id="home" >
    <doodle-pad/>
    <chat-pad/>
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <mdb-container>-->
<!--      <mdb-row>-->
<!--        <mdb-col col="sm">One of three columns</mdb-col>-->
<!--        <mdb-col col="sm">One of three columns</mdb-col>-->
<!--        <mdb-col col="sm">One of three columns</mdb-col>-->
<!--      </mdb-row>-->
<!--    </mdb-container>-->

  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios';
// import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
import doodlePad from '../components/DoodlePad'
import chatPad from '../components/ChatPad'
export default {
  name: 'Home',
  components: {
    doodlePad,
    chatPad,
      // mdbContainer,
      // mdbRow,
      // mdbCol
  },
  mounted() {

  }
}
</script>
<style>
  #home{
    /*background: red;*/
    /*height: 2000px;*/
  }
</style>