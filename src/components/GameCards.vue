<template>
  <div class="flex flex-wrap flex-row p-5 text-2xl">
    <div v-for="game in games" :key="game.id" class="flex-auto h-3/4 m-3 rounded-t-xl w-56 bg-gray-300">
        <div class="text-center font-bold m-5 text-5xl">
          <h2>{{ game.title }}</h2>
        </div>
        <div class="text-center mb-2">
          {{ game.description }}
        </div>
        <div class="flex flex-col items-center p-3 mb-1">
          <a :href=game.pcUrl class="hover:text-blue-700">PC Download</a>
          <a :href=game.macUrl class="hover:text-blue-700">Mac Download</a>
        </div>
        <div>
          <img class="h-96 w-full object-fill" :src= game.imgUrl>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ["games"],
    }
</script>