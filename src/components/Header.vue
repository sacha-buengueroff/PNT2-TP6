<template>

  <section class="src-components-header">

    <div id="header" :style="{'background': mostrarFondo}">
      <h1>The Great <br>
        <span id="colorDisplay">{{ mostrarPickedColor }}</span>
        <br>
        Guessing Game</h1>
    </div>

    <Navigator/>
  </section>

</template>

<script>
  import Navigator from './Navigator.vue'

  export default  {
    name: 'src-components-header',
    props: [],
    components: {
      Navigator
    },
    mounted () {
    
    },
    data () {
      return {
        colorCorrecto: "steelblue"
      }
    },
    methods: {

    },
    computed: {

    }
}

</script>

<style scoped lang="css">
  #header {
    transition: all 0.3s;
    background: steelblue;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: white;
    
  }
  #colorDisplay {
    font-size: 200%;
  }
</style>
