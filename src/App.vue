<template>
  <div>Welcome to Club 36 Arcade</div>
  <!-- <hello-world/> -->

  <main id="app">
    <section class="games">
      <div v-for="game in games" :key="game.id" class="game">
        <div>
          {{ game.title }} 
          {{ game.description }} 
          {{ game.pcUrl }} 
          {{ game.macUrl }}
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from "axios"

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      games: []
    }
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/links")
      // .then(res => console.log(res.data))
      .then(res => {this.games = res.data})
      .catch(err => console.error(err))
  }
}
</script>
