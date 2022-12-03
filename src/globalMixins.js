import Vue from 'vue'

const miMixinGlobal = {
    methods: {
    },
    computed: {
        mostrarSquares() {
            let squares = this.$store.state.squares
            return squares
        },
        mostrarPickedColor() {
            let pickedColor = this.$store.state.pickedColor
            return pickedColor
        },
        mostrarMessage() {
            let message = this.$store.state.message
            return message
        },
        mostrarRestartMessage() {
            let restartMessage = this.$store.state.restartMessage
            return restartMessage
        },
        mostrarFondo() {
            let fondo = this.$store.state.fondo
            return fondo
        }
    }
}

Vue.mixin(miMixinGlobal)