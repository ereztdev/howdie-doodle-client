import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        canvasColor: 'choose color',
        brushSize: '20',
        canvasElement: null,
        ctxElement: null,
        canvasWidth: 0,
        canvasHeight: 0,
        allVectors: [],
        // lastVectors:[]
        user: {
            id: '',
            name: ''
        },
        fullChat: []
    },
    mutations: {
        updateCanvasColor(state, payload) {
            state.canvasColor = payload.colorChosen
        },
        updateBrushSize(state, payload) {
            state.brushSize = payload.brushSize
        },
        setCanvasCtxAndDimensions(state, payload) {
            state.canvasElement = payload.canvasEl;
            state.ctxElement = payload.ctxEl;
            state.canvasWidth = payload.canvasWidth;
            state.canvasHeight = payload.canvasHeight;
        },
        addVectors(state, payload) {
            if (payload.reset) {
                state.allVectors = [];
            } else {
                state.allVectors.push({from: payload.from, to: payload.to})
            }
        },
        setUserName(state, payload) {
            if (payload.user.name && payload.user.id)
                state.user = payload.user

        },
        setSingleChat(state, payload) {
            console.log(payload);
            let fullTimeDate = payload.time;
            let dateTime = moment(fullTimeDate).format('MMMM Do YYYY | HH:mm:ss');
            let name = payload.name;
            let text = payload.text;
            state.fullChat.push({fullTimeDate, dateTime, name, text})
        },
        // updateLastVector(state,payload){
        //   if (payload.reset){
        //     state.lastVectors = [];
        //   }else{
        //     state.lastVectors.push({from:payload.from,to:payload.to})
        //   }
        // }
    },
    actions: {},
    modules: {}
})
