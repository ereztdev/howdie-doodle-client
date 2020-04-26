import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    canvasColor:'choose color',
    brushSize:'20',
    canvasElement:null,
    ctxElement:null,
    canvasWidth:0,
    canvasHeight:0,
    allVectors:[],
    // lastVectors:[]
    user:{
      id:'xyz123',
      name:'erez'
    },
    fullChat:[]
  },
  mutations: {
    updateCanvasColor(state, payload){
      state.canvasColor = payload.colorChosen
    },
    updateBrushSize(state, payload){
      state.brushSize = payload.brushSize
    },
    setCanvasCtxAndDimensions(state, payload){
      state.canvasElement = payload.canvasEl;
      state.ctxElement = payload.ctxEl;
      state.canvasWidth = payload.canvasWidth;
      state.canvasHeight = payload.canvasHeight;
    },
    addVectors(state,payload){
      if (payload.reset){
        state.allVectors = [];
      }else{
        state.allVectors.push({from:payload.from,to:payload.to})
      }
    },
    setUserName(state,payload){
      if (payload.user.name && payload.user.id)
      state.user = payload.user

    },
    setSingleChat(state,payload){
      let singleChatTime = payload.singleChatTime;
      let singleChatName = payload.singleChatName;
      let singleChatText = payload.singleChatText;
      state.fullChat.push({singleChatTime,singleChatName,singleChatText})
    },
    // updateLastVector(state,payload){
    //   if (payload.reset){
    //     state.lastVectors = [];
    //   }else{
    //     state.lastVectors.push({from:payload.from,to:payload.to})
    //   }
    // }
  },
  actions: {
  },
  modules: {
  }
})
