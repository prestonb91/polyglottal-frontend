<template>
  <div class="flex flex-wrap flex-row justify-center p-5 text-2xl">
    <div v-for="game in games" :key="game.id" class="flex-auto h-3/4 m-10 rounded-t-xl max-w-96 bg-gray-300">
        <div class="text-center font-bold m-5 text-5xl">
          <h2>{{ game.title }}</h2>
        </div>
        <div class="text-center mb-2">
          {{ game.description }}
        </div>
        <div class="text-center">
            ---------------------
        </div>
        <div class="flex flex-col items-center mb-2">
          <a :href=game.pcUrl class="hover:text-blue-700 text-sky-700">Download Now!</a>
          <a :href=game.macUrl class="hover:text-blue-700 text-red-500">Download Java to play!</a>
        </div>
        <div>
          <img class="h-80 w-full object-fill" :src= game.imgUrl>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        // props: ["games"],
        data() {
          return {
            games: [
          {
            id: 1,
            title: "Salamander",
            description: "ssssaytha seyythaa ssss ayaahath",
            pcUrl: "https://drive.google.com/drive/folders/1ZAKsW3ccknPx2VvnHeBxjPAxg8Yurtqh?usp=drive_link",
            macUrl: "https://www.java.com/en/download/manual.jsp",
            imgUrl: "https://www.gamespot.com/a/uploads/scale_medium/box/3/5/9/5/14609-43595.jpg",
          },
          {
            id: 2,
            title: "Super Dario Bros.",
            description: "Become the one, the only, the Dario",
            pcUrl: "https://drive.google.com/file/d/1oVNBNLG9CZlPFOVaTbDdqr9HCr6hjr6o/view?usp=drive_link",
            macUrl: "https://www.java.com/en/download/manual.jsp",
            imgUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d287c44-7436-45a9-93be-b4608c588285/d6eqa4k-47a8828e-62dc-4029-ab97-bbef845664e6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkMjg3YzQ0LTc0MzYtNDVhOS05M2JlLWI0NjA4YzU4ODI4NVwvZDZlcWE0ay00N2E4ODI4ZS02MmRjLTQwMjktYWI5Ny1iYmVmODQ1NjY0ZTYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1ywSjK6D-jIS3jiRbzuhFcfAFyZ4dhneLAYFlE8pUu8",
          },
          {
            id: 3,
            title: "Space Invader",
            description: "WHO WILL SAVE US?",
            pcUrl: "https://drive.google.com/drive/folders/1nsK3F2Z6Jb7az4RXXEl4NgWWH6A4K_OA?usp=sharing",
            macUrl: "https://www.java.com/en/download/manual.jsp",
            imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/16/Space_Invaders_%28Player_One_single%2C_cover_art_-_Australian_version%29.jpg",
          }
          ]
        }
      }
    }
</script>