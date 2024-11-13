<template>
    <div v-for="game in games" :key="game.id" class="games">
      <div>
        <h2>{{ game.title }}</h2>
        {{ game.description }}
        <br/>
        {{ game.pcUrl }} 
        <br/>
        {{ game.macUrl }}
        <br/>
      </div>
    </div>
</template>

<script>
    export default {
        props: ["games"],
    }
</script>