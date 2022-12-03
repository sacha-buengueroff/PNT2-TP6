import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        squares: [],
        pickedColor: "",
        message: "",
        restartMessage: "New Colors!",
        fondo: "steelblue"
    },
    actions: {
        setSquares({commit}, squares) {
            try {
                commit("setSquares", squares)
            }
            catch (error) {
                console.log(error);
            }
        },
        setPickedColor({commit}, pickedColor) {
            try {
                commit("setPickedColor", pickedColor)
            }
            catch (error) {
                console.log(error);
            }
        },
        colorCorrecto({commit}) {
            try {
                commit("colorCorrecto")
            }
            catch (error) {
                console.log(error);
            }
        },
        colorIncorrecto({commit}, index) {
            try {
                commit("colorIncorrecto", index)
            }
            catch (error) {
                console.log(error);
            }
        },
    },
    mutations: {
        setSquares(state, squares) {
            state.squares = squares
            state.message = ""
            state.fondo = "steelblue"
        },
        setPickedColor(state, pickedColor) {
            state.pickedColor = pickedColor
        },
        colorCorrecto(state) {
            let arr = []
            for (let i = 0; i < state.squares.length; i++) {
                arr[i] = state.pickedColor   
            }
            state.squares = arr
            state.message = "You Picked Right!"
            state.restartMessage = "Play Again!"
            state.fondo = state.pickedColor
        },
        colorIncorrecto(state, index) {
            let arr = [...state.squares]
            arr[index] = "#232323"
            state.squares = arr
            state.message = "Try Again!"
        }
    }
})