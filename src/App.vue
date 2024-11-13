<template>
  <h1>Welcome to Club 36 Arcade</h1>

  <main id="app">
    <GameCards :games="games"/>
  </main>
</template>

<script>
import axios from "axios"
import GameCards from "./components/GameCards.vue";

export default {
  name: 'App',
  components: {
    GameCards
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
