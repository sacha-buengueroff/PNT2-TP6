<template>

  <section class="src-components-container">
    <div id="container">
      <div v-for="(color, index) in mostrarSquares" 
      v-bind:key="index" 
      class="square"
      :style="{'background': color}"
      @click="validarColor(color, index)"></div>
    </div>


  </section>

</template>

<script>

  export default  {
    name: 'src-components-container',
    props: [],
    mounted () {
      
    },
    data () {
      return {
       
      }
    },
    methods: {
      validarColor(color, index) {
        if(this.mostrarPickedColor == color) {
          this.$store.dispatch("colorCorrecto")
        }
        else {
          this.$store.dispatch("colorIncorrecto", index)
        }
      }
    },
    computed: {
      
    }
}

</script>

<style scoped lang="css">
  .square {
    width: 30%;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;
  }
  #container {
    margin: 20px auto;
    max-width: 600px;
  }
</style>
