<template>
  <main id="app">
    <h1 class="text-center text-7xl font-bold bg-white h-32 flex justify-center items-center text-red-500">Welcome to Club 36 Arcade</h1>
    <div>
      <GameCards :games="games"/>
    </div>
  </main>
</template>

<script>
import axios from "axios"
import GameCards from "./components/GameCards.vue";
import "./index.css"

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
